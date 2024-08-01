import {Card, Text} from '@gravity-ui/uikit';
import css from './styles.module.scss';

export default function CutTypes() {
    return (
        <div>
            <div className={css.CutTypes__content}>
                <div className={'base-block'}>
                    <Card
                        view="raised"
                        type="container"
                        size="l"
                        style={{
                            maxWidth: 1100,
                        }}
                    >
                        <div className={'base-card'}>
                            <Text variant="display-2" color="brand" className="main-title">
                                Лестницы
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Компания "Волжский Дом" предлагает вашему вниманию так же
                                качественные лестницы. Современный производственный комплекс
                                позволяет реализовывать самые сложные проекты лестница гарантией от
                                производителя до 10 лет!
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Схема работы
                            </Text>
                            <div>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 16,
                                    }}
                                >
                                    Мы работаем по совершенно прозрачной схеме. Вы звоните,
                                    заказываете бесплатный замер, после чего, наш специалист
                                    выезжает к вам на объект. После обмерки и согласования с вами
                                    материала и дизайна - мы подписываем с вами договор, после этого
                                    вы ожидаете окончания производства.
                                    <br />
                                    <br />
                                    Далее, наша монтажная бригада выезжает к вам на объект,
                                    производит установку, подгонку и настройку лестницы, перил,
                                    пилястр. После чего производится обработка ступеней и других
                                    элементов конструкции, далее происходит приемка работ и ваше
                                    счастливое использование лестницы.
                                    <br />
                                    <br />
                                    Мы готовы провести любые консультации по телефону и примем любые
                                    ваши заявки. Кроме того, Вы можете присылать свои проекты нам на
                                    электронную почту. Стоимость всех работ рассчитывается строго
                                    согласно ценам, указанным в прайс-листе.
                                    <br />
                                    <br />
                                    Стоимости работ указанные в нашем прайс-листе действующие.
                                </Text>
                                {/* <ImageSlider /> */}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
