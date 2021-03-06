import React from 'react';
import './StarWars.css';

function CharCard(props) {
    return (
        <div className='card'>
            <h2>{props.cardData.name}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>{`Birth Year: ${props.cardData.birth_year}`}</td>
                        <td className='blank-cell'></td>
                        <td>{`Eye Color: ${props.cardData.eye_color}`}</td>
                    </tr>
                    <tr>
                        <td>{`Gender: ${props.cardData.gender}`}</td>
                        <td className='blank-cell'></td>
                        <td>{`Hair Color: ${props.cardData.hair_color}`}</td>
                    </tr>
                    <tr>
                        <td>{`Height: ${props.cardData.height} cm`}</td>
                        <td className='blank-cell'></td>
                        <td>{`Mass: ${props.cardData.mass} stones`}</td>
                    </tr>
                    <tr>
                        <td>{`Skin Color: ${props.cardData.skin_color}`}</td>
                        <td className='blank-cell'></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default CharCard;
