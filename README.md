# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<div className='relative cursor-pointer mr-[15px]'>
                  {user ? (
                    <Link to='/profile'>
                      <img
                        src={`${backend_url}${user.avatar}`}
                        alt=''
                        className='w-[35px] h-[35px] rounded-full '
                      />
                    </Link>
                  ) : (
                    <Link to='/login'>
                      <CgProfile
                        size={30}
                        color='rgb(255 255 255 / 83%)'
                      />
                    </Link>
                  )}
                </div>
