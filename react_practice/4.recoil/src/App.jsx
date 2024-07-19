
import { RecoilRoot,useRecoilValue,useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom } from '../store/atoms/count'

export default function Context_Counter(){
    return (
      // component that are using atom logic, recoil logic etc must be wrapped in a RecoilRoot tag
        <div>
          <RecoilRoot>
            <Count />
          </RecoilRoot>
        </div>
    )
}

function Count() {
    console.log("count is re rendering")
    return <div>
        <CountRenderer />
        <Buttons />
    </div>
}

function CountRenderer() {

  const count = useRecoilValue(countAtom)
    return <div>
      <b>
        {count}
        {count % 2 === 0 ? (
          <div>It is even</div>
        ) : (
          <div>It is Odd</div>
        )}
      </b>
    </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  console.log("button re renders")
  // useSetRecoilState prevents button component from re rendering
    return <div>
        <button onClick={() => {
          setCount(count => count + 1)
        }}>Increase</button>

        <button onClick={() => {
          setCount(count => count - 1)
        }}>Decrease</button>
    </div>
}