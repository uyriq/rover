import React from 'react';
import styles from './App.module.css';
import * as rover from './components/rover';

const {
    ThirdCircle,
    SecondCircle,
    FirstCircle,
    FourthRectangle,
    SecondTriangleRectangle,
    FirstTriangle,
    OrangeRectangle,
    RedStick,
    ThirdRectangle,
    SecondRectangle,
    FirstRectangle,
    Trapezoid,
    Stick,
    Flag,
} = rover;

interface CssValues {
    color: string;
    bgcolor: string;
    width: string;
    height: string;
    borderRadius: string;
    borderLeft: string;
    borderRight: string;
    borderBottom: string;
    borderTop: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
}

interface ComponentProps {
    Name: string;
    DisplayName: string;
    Component: React.FC<CssValues>;
    // find and replace the 'component' property to the Namw property in next code
    cssValues: CssValues;
}
const initialCssValues = {
    color: '#000000',
    bgcolor: '',
    width: '',
    height: '',
    borderRadius: '',
    borderLeft: '',
    borderRight: '',
    borderBottom: '',
    borderTop: '',
    borderBottomLeftRadius: '',
    borderBottomRightRadius: '',
    name: '',
    title: '',
} as CssValues;

const components: ComponentProps[] = [
    { DisplayName: 'Flag', Name: 'Flag', Component: Flag, cssValues: initialCssValues },
    { DisplayName: 'Stick', Name: 'Stick', Component: Stick, cssValues: initialCssValues },
    {
        DisplayName: 'First Rectangle',
        Name: 'FirstRectangle',
        Component: FirstRectangle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Trapezoid',
        Name: 'Trapezoid',
        Component: Trapezoid,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Second Rectangle',
        Name: 'SecondRectangle',
        Component: SecondRectangle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Third Rectangle',
        Name: 'ThirdRectangle',
        Component: ThirdRectangle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Red round line over rover',
        Name: 'RedStick',
        Component: RedStick,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Orange Rectangle',
        Name: 'OrangeRectangle',
        Component: OrangeRectangle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'First Triangle',
        Name: 'FirstTriangle',
        Component: FirstTriangle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Second Triangle-Rectangle',
        Name: 'SecondTriangleRectangle',
        Component: SecondTriangleRectangle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Fourth Rectangle',
        Name: 'FourthRectangle',
        Component: FourthRectangle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'First Wheel',
        Name: 'FirstCircle',
        Component: FirstCircle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Second Wheel',
        Name: 'SecondCircle',
        Component: SecondCircle,
        cssValues: initialCssValues,
    },
    {
        DisplayName: 'Third Wheel',
        Name: 'ThirdCircle',
        Component: ThirdCircle,
        cssValues: initialCssValues,
    },
];

function App() {
    const [cssValues, setCssValues] = React.useState<CssValues>({
        ...initialCssValues,
    });

    const [activeComponent, setActiveComponent] = React.useState<ComponentProps | null>(null);
    const [selectedComponent, setSelectedComponent] = React.useState<string>('');

    const handleComponentClick = (componentName: string) => {
        const component = components.find((c) => c.Name === componentName);
        if (component) {
            setActiveComponent(component);
            setSelectedComponent(componentName);
        }
    };

    const handleComponentClickbyName = (componentName: string) => {
        const component = components.find((c) => c.Name === componentName);
        if (component) {
            setActiveComponent(component);
            setSelectedComponent(componentName);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCssValues((prev) => ({ ...prev, [name]: value }));
    };

    React.useEffect(() => {
        console.log(cssValues);
    }, [cssValues]);

    return (
        <div>
            <h1>Rover css elements properties playground</h1>
            <p>
                choose element from list, or by clicking on rover image part, change apropriate
                properties size,'#hexcolor'|'transparent' inputboxes to the right, for example set
                Background #hex Color: #cafe see result on rover, this code is part of typescript/css study task
                
 &nbsp;
            </p>
            <header className={styles.two_columns}>
                <div className={styles.first_column}>
                    {components.map((component) => {
                        const { Name, DisplayName, Component } = component;
                        const isSelected = selectedComponent === Name;
                        return (
                            <div key={Name} onClick={() => handleComponentClickbyName(Name)}>
                                <p
                                    style={{
                                        backgroundColor: isSelected ? '#cafe' : '',
                                        display: 'inline-block',
                                        margin: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    {DisplayName}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.second_column}>
                    <label htmlFor="color">Element #hex Color:&nbsp;&nbsp;</label>
                    <input type="text" name="color" onChange={handleInputChange} />
                    <label htmlFor="bgcolor">Background #hex Color:</label>
                    <input type="text" name="bgcolor" onChange={handleInputChange} />
                    <label htmlFor="width">
                        Element Width:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                    <input type="text" name="width" onChange={handleInputChange} />
                    <label htmlFor="height">
                        Element Height: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                    <input type="text" name="height" onChange={handleInputChange} />
                    <label htmlFor="borderRadius">Element Border radius:&nbsp;&nbsp;</label>
                    <input type="text" name="borderRadius" onChange={handleInputChange} />
                    <label htmlFor="borderLeft">Element Border left:</label>
                    <input type="text" name="borderLeft" onChange={handleInputChange} />
                    <label htmlFor="borderRight">Element Border right:</label>
                    <input type="text" name="borderRight" onChange={handleInputChange} />
                    <label htmlFor="borderBottom">Element Border bottom:</label>
                    <input type="text" name="borderBottom" onChange={handleInputChange} />
                    <label htmlFor="borderTop">Element Border top:</label>
                    <input type="text" name="borderTop" onChange={handleInputChange} />
                    <label htmlFor="borderBottomLeftRadius">
                        Element bottom left raduis corner
                    </label>
                    <input type="text" name="borderBottomLeftRadius" onChange={handleInputChange} />
                    <label htmlFor="borderBottomRightRadius">
                        Element bottom right raduis corner
                    </label>
                    <input
                        type="text"
                        name="borderBottomRightRadius"
                        onChange={handleInputChange}
                    />
                </div>
            </header>

            <div className={styles.main}>
                <Flag {...initialCssValues} onClick={() => handleComponentClick('Flag')} />
                <Stick {...initialCssValues} onClick={() => handleComponentClick('Stick')} />
                <FirstRectangle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('FirstRectangle')}
                />
                <Trapezoid
                    {...initialCssValues}
                    onClick={() => handleComponentClick('Trapezoid')}
                />
                <SecondRectangle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('SecondRectangle')}
                />
                <ThirdRectangle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('ThirdRectangle')}
                />
                <RedStick {...initialCssValues} onClick={() => handleComponentClick('RedStick')} />
                <OrangeRectangle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('OrangeRectangle')}
                />
                <FirstTriangle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('FirstTriangle')}
                />
                <FourthRectangle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('FourthRectangle')}
                />
                <SecondTriangleRectangle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('SecondTriangleRectangle')}
                />
                <FirstCircle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('FirstCircle')}
                />
                <SecondCircle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('SecondCircle')}
                />
                <ThirdCircle
                    {...initialCssValues}
                    onClick={() => handleComponentClick('ThirdCircle')}
                />
                {activeComponent && <activeComponent.Component {...cssValues} />}
            </div>
        </div>
    );
}

export default App;
