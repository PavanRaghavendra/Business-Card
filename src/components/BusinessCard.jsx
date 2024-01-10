
export function BusinessCard({ cardData }) {
    const { name, description, interest, linkedin, twitter } = cardData;
    return(
        <div style={style.card}>
            <h2 style={style.name}>{name}</h2>
            <p style={style.description}>{description}</p>
            <h3 style={style.interestheader}>interest</h3>
            <ul style={style.interestList}>
            {interest.map((interest, index) => (
                    <li style={style.interest} key={index}>
                        {interest}
                    </li>
                ))}
            </ul>
            <div style={style.socialLink}>
                <a style={{...style.link, marginLeft: '0px'}}href={linkedin} >
                    LinkedIN
                </a>
                <a style={style.link}href={twitter}>
                    Twitter
                </a>
            </div>
        </div>
    )
}
const style={
    card:
    {
        border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#800080',
      color:'white'
    },
    name:
    {
        fontSize: '24px',
      marginBottom: '10px',
      color: 'white'
    },
    description:
    {
        fontSize: '16px',
        color: 'white',
        marginBottom: '15px'
    },
    interestheader:
    {
        fontSize: '18px',
        marginBottom: '10px',
        color: 'white'
    },
    interestList:
    {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    interest:
    {
        fontSize: '14px',
      marginBottom: '5px',
      color: 'white'
    },
    socialLink:
    {
        display: 'flex',
        marginBottom: '15px',
    },
    link:
    {
        textDecoration: 'none',
        color: '#fff', 
        padding: '10px 15px', 
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        display: 'inline-block', 
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }
}