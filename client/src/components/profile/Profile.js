import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import  { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'

const Profile = ({
    match,
    getProfileById,
    profile: { profile, loading },
    auth
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <>
            {profile === null || loading ? <Spinner /> : <>
                <Link to='/profiles' className='btn btn-light'>
                    Back To Profiles
                </Link>
                {auth.isAuthenticated &&
                    auth.loading === false &&
                    auth.user._id === profile.user._id && (
                        <Link to='/edit-profile' className='btn btn-dark'>
                            Edit Profile
                        </Link>
                    )}
                    <div class="profile-grid my-1">
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                    </div>
            </>}
        </>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile)
