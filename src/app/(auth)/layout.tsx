interface Props{
    children: React.ReactNode;   
}

//By renaming auth folder to (auth) _> it means we are grouping routes and we can access them using localhost/sign_in instaed of localhost/auth/sign_in

const Layout=({children}:Props)=>{

    return(
         <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-sm md:max-w-3xl">
                            {children}
                    </div>
            </div>
    );

}

export default Layout;