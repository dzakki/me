import React from "react"
// import cx from "classnames"
import DefaultLayoutArticle from "components/Templates/DefaultLayoutArticle";
import Image from "components/Atoms/Image";
import CodeEmbed from "components/Atoms/CodeEmbed"
import TitleTwo from "components/Atoms/TitleTwo"
import Text from "components/Atoms/Text"

const DetailArticle = () => {


    return (
        <DefaultLayoutArticle title="Hello world">
            <Text>
                <em>Lorem ipsum dolor</em>  <strong>  sit amet, </strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit  <strike>anim id est laborum.</strike>.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <TitleTwo>image embed</TitleTwo>
            <Image url="https://bulma.io/images/placeholders/640x360.png" alt="sample image" />
            <Image url="https://bulma.io/images/placeholders/256x256.png" alt="sample image 2" />


            <CodeEmbed url="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C100%29&t=monokai&wt=none&l=jsx&ds=true&dsyoff=16px&dsblur=37px&wc=true&wa=false&pv=48px&ph=32px&ln=false&fl=1&fm=Hack&fs=13px&lh=133%25&si=false&es=2x&wm=false&code=%253CText%253E%250A%2520%2520%2509Hello%2520world%250A%253C%252FText%253E" title="hello world" />
            <code>this a code</code>

            <ol type="1">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol>
            <ol type="A">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol>
            <ol type="a">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol>
            <ol type="I">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol>
            <ol type="i">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol>
            <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </blockquote>

        </DefaultLayoutArticle>
    )
}

export default DetailArticle