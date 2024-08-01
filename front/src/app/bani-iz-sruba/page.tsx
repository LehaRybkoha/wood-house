import {ButtonClient} from '@/components/ButtonClient/ButtonClient';
import {HouseCard} from '@/components/HouseCard/HouseCard';
import {Card, Text} from '@gravity-ui/uikit';
import Link from 'next/link';
import css from './styles.module.scss';

type BathInfoItem = {
    title: string;
    values: string[][];
};

export type Bath = {
    id: number;
    name: string;
    area: number;
    description: string;
    price: string;
    log_size: string;
    hallway: string;
    src: string;
    images: string[];
    information: BathInfoItem[];
    characteristic: string[];
    complection: string[];
};

async function getData() {
    const res = await fetch('http://194.58.126.86/api/baths');

    if (!res.ok) {
        return [];
    }

    return res.json();
}

export default async function Baths() {
    const baths: Bath[] = await getData();

    return (
        <div>
            <div className={css.Baths__content}>
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
                                Срубы бань из бревна ручной рубки
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Для вашего удобства мы приводим подробный прайс-лист на стандартные
                                размеры и комплектацию срубов. Вы можете самостоятельно произвести
                                расчёт строительства бани. Мы стараемся сделать всё, чтобы наше
                                сотрудничество было удобным, в первую очередь, для вас. Но иногда мы
                                бессильны, например, ко всем баням до размера 6x4 м мы предлагаем
                                бесплатный столбчатый фундамент, но загрузить в бортовую машину
                                песок, требуемый для устройства такого типа фундамента, просто
                                невозможно. Также, вы можете перейти сразу к готовым проектам
                                разработанным для вас нашими дизайнерами.
                            </Text>
                            <div className={css.Baths__actions}>
                                <Link href="/bani-iz-sruba#lap-srub">
                                    <ButtonClient
                                        className={css.Baths__action}
                                        size="xl"
                                        view="action"
                                        pin="circle-circle"
                                    >
                                        Прайс на бани рубки "в лапу"
                                    </ButtonClient>
                                </Link>
                                <Link href="/bani-iz-sruba#lap-csh">
                                    <ButtonClient
                                        className={css.Baths__action}
                                        size="xl"
                                        view="action"
                                        pin="circle-circle"
                                    >
                                        Прайс на бани рубки "в чашу"
                                    </ButtonClient>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary">
                                Проекты бань из бревна
                            </Text>
                            <div className={css.Baths__projects}>
                                {baths.map((item) => (
                                    <HouseCard key={item.id} bath={item} />
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Комплектация поставки сруба под усадку
                            </Text>
                            <div>
                                <Text
                                    variant="header-1"
                                    color="dark-complementary"
                                    className="main-title"
                                    style={{
                                        marginTop: 32,
                                        marginLeft: 16,
                                    }}
                                >
                                    Территория бесплатной доставки и сборки срубов
                                </Text>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 32,
                                    }}
                                >
                                    Проверьте таблицу актуальности доставки, чтобы убедиться, что
                                    доставка для вас не будет ничего стоить:
                                    <br />
                                    <ul>
                                        <li>
                                            В радиусе 100 км от Москвы (МКАД), в некоторых
                                            направлениях до 350 км;
                                        </li>
                                        <li>В Смоленскую и Псковскую области;</li>
                                        <li>На юг Ленинградской области;</li>
                                        <li>Калужскую, Тульскую, Брянскую и Тверскую области.</li>
                                    </ul>
                                    Во всех остальных случаях доставка рассчитывается индивидуально.
                                </Text>
                                <Text
                                    variant="header-1"
                                    color="dark-complementary"
                                    className="main-title"
                                    style={{
                                        marginTop: 32,
                                        marginLeft: 16,
                                    }}
                                >
                                    Комплектация срубов бань
                                </Text>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 32,
                                    }}
                                >
                                    На нашем сайте, а также во всех рекламных материалах,
                                    указывается стоимость базовой комплектации, независимо от того,
                                    по какой технологии строится сруб. В цену базовой комплектации
                                    уже включены:
                                    <br />
                                    <ul>
                                        <li>
                                            Сруб из бревна: сам колодец, рубленный "в чашу" с
                                            "лунным пазом" или "в лапу" с "угловым пазом";
                                        </li>
                                        <li>
                                            Пятая стена, отёсанная с двух сторон при рубке "в лапу",
                                            "в чашу" кругляк, врезана под 90', по меньшей стороне;
                                        </li>
                                        <li>Потолочные балки из бревна;</li>
                                        <li>
                                            Доска обрезная 25 мм на зашивку фронтонов, если они не
                                            рубленные;
                                        </li>
                                        <li>
                                            Рубероид для крыши и гидроизоляции фундамента в случае
                                            бесплатного столбчатого;
                                        </li>
                                        <li>
                                            Стропила под двухскатную или ломанную крышу. Фронтон по
                                            меньшей стороне;
                                        </li>
                                        <li>
                                            При стандартной крыше бани высота конька 1,5-2,2 м, при
                                            двухскатной мансарде 3,3-4 м;
                                        </li>
                                        <li>
                                            В случае ломанной крыши для стропил поставляется доска
                                            150x50 мм, стойки и окантовка комнаты из бруса 100x100
                                            мм;
                                        </li>
                                        <li>
                                            Утеплитель между бревнами мох или джут в зависимости от
                                            сезона;
                                        </li>
                                        <li>
                                            Столбчатый фундамент из блоков 20x20x40 см (входит до
                                            размера 6х4 м включительно);
                                        </li>
                                        <li>
                                            Высота потолка бани в чистоте после укладки пола 2,1-2,2
                                            м;
                                        </li>
                                        <li>
                                            Диаметр бревна бани в среднем 22-26 см (можно
                                            увеличить);
                                        </li>
                                        <li>
                                            Диаметр бревна для пятой стены на 16-20 см (можно
                                            увеличить).
                                        </li>
                                    </ul>
                                    «Рабочий колодец» для Вашего будущего дома или бани мы рубим на
                                    собственной лесной делянке, где очень тщательно подгоняем каждое
                                    бревно, после чего все бревна нумеруются, и сруб в разобранном
                                    виде отправляется к вам. Сборка и доставка материала на Вашем
                                    участке уже включены в его стоимость для регионов указанных
                                    выше.
                                </Text>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'} id="lap-srub">
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Стоимость рубленных бань "в лапу"
                            </Text>
                            <Text variant="body-3" color="dark-secondary" className="base-desc">
                                Рубка в лапу в производстве проще, для неё применяется лес с
                                большими допусками по диаметрам брёвен, так как внутренняя
                                поверхность стены отёсывается в полу-лафет. Лафет - это отёска
                                бревна под плоскость с обеих сторон, а полу-лафет, соответственно, с
                                одной стороны. "Пятая стена" при рубке в лапу отёсывается под
                                двухсторонний лафет. При всём этом срубы в лапу ничем не хуже чаши,
                                но по стоимости являются более доступными. Чаще всего, именно их
                                выбирают для строительства бревенчатой бани. Размер указан по
                                внутреннему периметру.
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Бани "в лапу" без веранды
                            </Text>
                            <div
                                className="scroll-x"
                                style={{marginTop: 32, overflowX: 'scroll', maxWidth: '100%'}}
                            >
                                <table className="table-srubi table-xs">
                                    <thead>
                                        <tr>
                                            <td rowSpan={2} width="15%">
                                                Размер сруба (осевой)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                Стандартная крыша <br />
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов бань в чашу со стандартной двускатной крышей"
                                                    src="https://moy-srub.ru/upload/medialibrary/d60/d6096453adafe1a719d252f0063313eb.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба в чашу со стандартной крышей"
                                                />
                                            </td>
                                            <td colSpan={1}>
                                                С двускатной мансардой <br />
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов бань в чашу с двускатной мансардой увеличенной высоты"
                                                    src="https://moy-srub.ru/upload/medialibrary/384/3847cddd074b9cac000a4d5237349832.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример в чашу сруба с двускатной мансардой"
                                                />
                                            </td>
                                            <td colSpan={1}>
                                                С ломаной мансардой <br />
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов бань в чашу с ломаной мансардной крышей"
                                                    src="https://moy-srub.ru/upload/medialibrary/a4e/a4e9e29a7c4b6aeec6d9e56b74d5ee4c.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба в чашу с ломаной мансардой"
                                                />
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>3х5</td>
                                            <td>319&nbsp;000 ₽</td>
                                            <td>
                                                <br />
                                            </td>
                                            <td>345 000&nbsp;₽</td>
                                        </tr>
                                        <tr>
                                            <td>3х6</td>
                                            <td>399&nbsp;000 ₽</td>
                                            <td>
                                                <br />
                                            </td>
                                            <td>435 000&nbsp;₽</td>
                                        </tr>
                                        <tr>
                                            <td>4х4</td>
                                            <td>345&nbsp;000 ₽</td>
                                            <td>375 000 ₽</td>
                                            <td>393&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>4х5</td>
                                            <td>399 000 ₽</td>
                                            <td>435&nbsp;000 ₽</td>
                                            <td>445&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>4х6</td>
                                            <td>459&nbsp;000 ₽</td>
                                            <td>495 000 ₽</td>
                                            <td>505 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>5х5</td>
                                            <td>495&nbsp;000 ₽</td>
                                            <td>530 000 ₽</td>
                                            <td>540&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>5х6</td>
                                            <td>575 000 ₽</td>
                                            <td>635&nbsp;000 ₽</td>
                                            <td>650 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>6х6</td>
                                            <td>629 000 ₽</td>
                                            <td>694&nbsp;000 ₽</td>
                                            <td>710&nbsp;000 ₽</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'} id="lap-csh">
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Бани "в чашу" с выносом под веранду - 2 метра
                            </Text>
                            <div
                                className="scroll-x"
                                style={{marginTop: 32, overflowX: 'auto', maxWidth: '100%'}}
                            >
                                <table className="table-srubi table-xs">
                                    <thead>
                                        <tr>
                                            <td rowSpan={2} width="15%">
                                                Размер сруба (осевой)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                Стандартная крыша <br />
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов бань в чашу со стандартной двускатной крышей"
                                                    src="https://moy-srub.ru/upload/medialibrary/d60/d6096453adafe1a719d252f0063313eb.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба в чашу со стандартной крышей"
                                                />
                                            </td>
                                            <td colSpan={1}>
                                                С двускатной мансардой <br />
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов бань в чашу с двускатной мансардой увеличенной высоты"
                                                    src="https://moy-srub.ru/upload/medialibrary/384/3847cddd074b9cac000a4d5237349832.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример в чашу сруба с двускатной мансардой"
                                                />
                                            </td>
                                            <td colSpan={1}>
                                                С ломаной мансардой <br />
                                                <img
                                                    width="180"
                                                    alt="Стоимость срубов бань в чашу с ломаной мансардной крышей"
                                                    src="https://moy-srub.ru/upload/medialibrary/a4e/a4e9e29a7c4b6aeec6d9e56b74d5ee4c.png"
                                                    loading="lazy"
                                                    height="124"
                                                    title="Пример сруба в чашу с ломаной мансардой"
                                                />
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>3х5</td>
                                            <td>349&nbsp;000 ₽</td>
                                            <td>395&nbsp;000 ₽</td>
                                            <td>424 000&nbsp;₽</td>
                                        </tr>
                                        <tr>
                                            <td>3х6</td>
                                            <td>434&nbsp;000 ₽</td>
                                            <td>487&nbsp;000 ₽</td>
                                            <td>494 000&nbsp;₽</td>
                                        </tr>
                                        <tr>
                                            <td>4х4</td>
                                            <td>374&nbsp;000 ₽</td>
                                            <td>424 000 ₽</td>
                                            <td>434&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>4х5</td>
                                            <td>439 000 ₽</td>
                                            <td>500&nbsp;000 ₽</td>
                                            <td>519&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>4х6</td>
                                            <td>509&nbsp;000 ₽</td>
                                            <td>570 000 ₽</td>
                                            <td>595 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>5х5</td>
                                            <td>530&nbsp;000 ₽</td>
                                            <td>584 000 ₽</td>
                                            <td>615&nbsp;000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>5х6</td>
                                            <td>595 000 ₽</td>
                                            <td>670&nbsp;000 ₽</td>
                                            <td>693 000 ₽</td>
                                        </tr>
                                        <tr>
                                            <td>6х6</td>
                                            <td>679 000 ₽</td>
                                            <td>769&nbsp;000 ₽</td>
                                            <td>790&nbsp;000 ₽</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Преимущества бани из бревна ручной рубки
                            </Text>
                            <Text variant="body-3" color="dark-secondary" className="base-desc">
                                Сейчас на рынке представлено огромное количество технологий
                                строительства бань, но на наш взгляд и взгляд многих наших
                                заказчиков, наиболее подходящим для этого материалом является бревно
                                ручной рубки. Срубы из обычного бревна имеют стены большей толщины,
                                по сравнению с "оцилиндровкой" и брусом. При производстве таких бань
                                не применяются клеевые или другие агрессивные химические составы,
                                что особенно важно, с учетом высоких температур и влажности в
                                парной. Например, баня из клееного бруса, будет источать пары клея,
                                пусть не в критических объёмах, но всё равно качество парения при
                                этом пострадает. А "оцилиндровка" окажется, в лучшем случае, из
                                бревна 22-го диаметра, то есть, толщина стены будет значительно
                                проигрывать бане ручной рубки.
                            </Text>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
