module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#272A45',
                gradient1: '#B3F3FF',
                gradient2: '#AEC0FF',
                form_bg: '#DBDBDB'
            },
            backgroundImage: {
                'hero': "url('Images/HeroArt.png')",
                'footer-texture': "url('Images/FooterWave.png')",
                'header-texture': "url('Images/HeaderWave.png')",
                'logo': "url('./Images/Logo.png')",
                'ic_stud': "url('./Images/Icon_Student.png')",
                'sel_arrow': "url('./Images/Sel_Arrow.png')",
            },
            backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain',
                'small': '15%',
                '16': '4rem',
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
