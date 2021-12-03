module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#272A45',
                gradient1: '#B3F3FF',
                gradient2: '#AEC0FF'
            },
            backgroundImage: {
                'hero': "url('Images/HeroArt.png')",
                'footer-texture': "url('Images/FooterWave.png')",
                'header-texture': "url('Images/HeaderWave.png')",
                'logo': "url('./Images/Logo.png')",
                'ic_stud': "url('./Images/Icon_Student.png')",
                'ig': "url('./Images/Icon_Student.png')",
                'fb': "url('./Images/Icon_Student.png')",
                'tw': "url('./Images/Icon_Student.png')",
            },
            fontSize: {
                heroTitle_desk: ['48px', '56.23px'],
                heroTitle_mobile: ['14px', '16.4px'],
                heroContent_desk: ['36px', '42.17px'],
                heroContent_mobile: ['9px', '10.54px']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
