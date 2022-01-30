import { AllPartnerIconComponent } from "../../partnerIcons/partnerIcons"
import { DisplayCircle } from "../frame/Frame"
import JobTitle from "../../utils/JobTitle"
import { PrimaryButton } from "../button/Buttons"
import { gradientCapsule } from "../../utils/utilFunctions";
import pic from "../../../../src/pic-edit.png";
import { useWindowSize } from "../../utils/utilFunctions";

export const CustomBanner = ({mode, setMode, lightColor, darkColor}) => {
    const size = useWindowSize()
    const Divider = () => {
        return (
            <div style={{
                border: '1px solid rgba(0, 0, 0, 0.125)', 
                height: '80%', 
                marginTop: 'auto', 
                marginBottom: 'auto',
                marginRight: '30px', 
                marginLeft: '5px',
            }}></div>
        )
    }
    let socialIcons = [
        "fab fa-linkedin-in fa-1x",
        "fab fa-github fa-1x",
        "fab fa-twitter fa-1x",
        "fab fa-codepen fa-1x",
        "fab fa-google fa-1x"
    ]
    return (
        <>
            <div 
                className="gradientBanner"
                style={{ 
                    height: '420px', 
                    borderBottom: mode? `5px solid ${darkColor}` : `5px solid ${lightColor}`,
                    paddingLeft: '50px',
                    paddingRight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >   
            <div style={{display: 'flex', flexDirection: 'column', padding: size.width <= 700 ? '0px' : '30px'}}>
                <DisplayCircle 
                    outlineClass={"outer-circle"} 
                    link={'#about'} 
                    imgClass={"profile-pic circle"} 
                    pic={pic}
                    height={330}
                    width={330}
                    boxShodow={true}
                />
            </div>
            
            {size.width > 1000 && <Divider /> }
            
            <div 
                style={{
                    position: 'relative', 
                    right: size.width > 700? '-5%' : '0%', width: size.width > 1000? '800px' : size.width <= 700 ? '90vw' : '400px', color: '#111', 
                    alignItems: 'center', 
                    padding: size.width <= 500? '15px' : '10px', 
                    marginBottom: '20px', 
                    marginLeft: size.width > 1000? null : '0px', 
                    zIndex: size.width <= 700 && 1,
                    background: size.width <= 500 && 'rgba(111, 111, 111, 0.7)',
                    // border: '1px solid red',
                 }}
                >
                    <div className="transition-title">
                        <JobTitle lightColor={lightColor} darkColor={darkColor}/><div className="divider">|</div>
                    </div> 
                <div 
                    style={{
                        display: 'flex', 
                        alignItems: size.width > 700? 'center' : 'flex-start', 
                        justifyContent: 'space-between',
                        flexDirection: size.width > 700? 'row' : 'column',
                        width: '410px',
                        // border: '1px solid red'
                    }}
                >
                <h3 style={{fontWeight: 'bold', margin: '0px', color: lightColor}}>John Nkpolukwu - </h3>
                    <span 
                        style={{
                            fontStyle: 'italic', 
                            fontSize: '0.8rem', 
                            height: '100%', 
                            margin: '0px',
                            fontWeight: 'thin',
                            color: lightColor
                        }}> Web Developer | Designer | Freelancer</span>
                </div> 
            
                <AllPartnerIconComponent socialIcons={socialIcons}/>
                <div style={{width: size.width > 1000? '80%' : '100%', lineHeight: '1.2', marginBottom: '40px', marginTop: '10px'}}>
                    <p 
                        style={{
                            fontSize: size.width > 700? '1.2rem' : size.width <= 400? '0.9rem' : '1.1rem', 
                            marginTop: size.width > 700? '25px' : '25px', 
                            fontWeight: size.width <= 400? 'bold' : '600',
                            lineHeight: 1.8,
                            color: lightColor
                        }}>
                            Melbourne based full stack developer, designer and freelancer specialising on the front-end. <span style={{fontStyle: 'italic', color: 'yellow'}}>Turning ideas into reality.</span></p>
                </div>
                <PrimaryButton 
                    title={'VIEW MY WORK' } 
                    link={'#portfolio'} 
                    position={'left'}
                    boxShadow={true}
                    href={true}
                />
            </div>          
        </div>
    </>
    )
}