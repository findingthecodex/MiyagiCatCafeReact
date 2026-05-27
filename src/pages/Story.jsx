import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Story = () => {
    return (
        <Container className="py-5" style={{ maxWidth: '900px' }}>
            {/* Hero-rubrik */}
            <div className="text-center mb-5">
                <span className="text-uppercase tracking-wider text-warning fw-bold small">Miyagis Kattkafé</span>
                <h1 className="display-4 fw-bold mt-2 mb-3" style={{ color: '#2c3e50' }}>
                    Välkommen till Miyagis Kattkafé 🐾
                </h1>
                <div className="mx-auto my-4" style={{ height: '3px', width: '60px', backgroundColor: '#f9a01a' }}></div>
            </div>

            {/* Huvudstory uppdelad i snygga kort */}
            <Row className="g-4">
                
                {/* Sektion 1: Kärleken till katterna */}
                <Col xs={12}>
                    <Card className="border-0 shadow-sm p-4 bg-white rounded-4">
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                                <span className="fs-3 me-3">☕</span>
                                <h3 className="h4 fw-bold mb-0" style={{ color: '#2c3e50' }}>Kärleken till katterna</h3>
                            </div>
                            <Card.Text className="text-secondary fs-5 lh-base">
                                På Miyagis Kattkafé börjar allt med en enkel och ren kärlek till katter. 
                                Hos oss kan du besöka caféet, njuta av en god fika och spendera tid med att 
                                lära känna våra fantastiska katter.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Sektion 2: ÄGARNA (NY!) */}
                <Col xs={12}>
                    <Card className="border-0 shadow-sm p-4 bg-white rounded-4" style={{ borderLeft: '5px solid #f9a01a' }}>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                                <span className="fs-3 me-3">🙋‍♂️🙋‍♀️</span>
                                <h3 className="h4 fw-bold mb-0" style={{ color: '#2c3e50' }}>Vilka är vi? (Och vem är Miyagi?)</h3>
                            </div>
                            <Card.Text className="text-secondary fs-5 lh-base">
                                Det är vi som driver caféet! Vår dröm föddes när vi adopterade vår allra första katt, 
                                en vis gammal herre med ett öra som vi döpte till **Miyagi**. Han visade oss hur mycket 
                                lugn och glädje en katt kan ge i en stressig vardag. Vi insåg snabbt att vi ville dela 
                                med oss av den känslan, samtidigt som vi ville göra verklig skillnad för hemlösa katter. 
                                Att öppna Miyagis blev vårt sätt att förena vår passion för gott hantverkskaffe med vårt 
                                brinnande djurrättsengagemang.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Sektion 3: Ett tryggt hem för alla */}
                <Col xs={12}>
                    <Card className="border-0 shadow-sm p-4 bg-white rounded-4">
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                                <span className="fs-3 me-3">🧡</span>
                                <h3 className="h4 fw-bold mb-0" style={{ color: '#2c3e50' }}>Ett tryggt hem för alla</h3>
                            </div>
                            <Card.Text className="text-secondary fs-5 lh-base">
                                Vi tror innerligt på att varje katt förtjänar ett tryggt hem, oändligt med kärlek 
                                och en plats där de verkligen hör hemma. Det är därför vi fokuserar på att hjälpa dem 
                                att hitta omtänksamma familjer som välkomnar dem med värme och hängivenhet. Från de lite 
                                blygare själarna till de lekfulla äventyrarna – varje katt förtjänar att känna sig älskad, 
                                skyddad och hemma.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Sektion 4: Mer än bara ett café */}
                <Col xs={12}>
                    <Card className="border-0 shadow-sm p-4 bg-white rounded-4">
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                                <span className="fs-3 me-3">✨</span>
                                <h3 className="h4 fw-bold mb-0" style={{ color: '#2c3e50' }}>Mer än bara ett café</h3>
                            </div>
                            <Card.Text className="text-secondary fs-5 lh-base">
                                Miyagis Kattkafé är inte bara ett ställe för en fika – det är en plats byggd på passion, 
                                personlighet och ett stort bultande hjärta för morrhår, mjuka tassar och sömnigt spinnande. 
                                Det är också en plats där du har möjlighet att adoptera och ge dessa katter ett nytt, 
                                kärleksfullt liv i ett permanent hem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            {/* Mysig Footer */}
            <div className="text-center mt-5 pt-4 text-muted fs-5">
                <p>Tack för att du är en del av vår resa! 💛</p>
            </div>
        </Container>
    );
};

export default Story;