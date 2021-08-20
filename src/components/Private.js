import {Route, Redirect} from 'react-router-dom'

export function PrivateRoute({children, ...rest}) {
    const token = localStorage.getItem('token')
    return (
        <Route
            {...rest}
            render={({location}) =>
                true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    )
}
