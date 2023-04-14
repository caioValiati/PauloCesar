
export function Social() {
    return (
        <div className="social-container md:block flex justify-center">
            <ul className="flex w-32 justify-between">
                <li>
                    <a target="_blank" href="https://www.facebook.com/pcvaliati?mibextid=ZbWKwL">
                        <img className="w-8 cursor-pointer hover:brightness-125 transition-all" src="media/icons/facebook.png" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://instagram.com/paulovaliati?igshid=ZDdkNTZiNTM=">
                        <img className="w-8 cursor-pointer hover:brightness-125 transition-all" src="media/icons/instagram.png" />
                    </a>
                </li>
            </ul>
        </div>
    )
}