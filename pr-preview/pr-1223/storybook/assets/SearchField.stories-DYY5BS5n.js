import{r as m,f as l,j as t}from"./iframe-JYgA1KQi.js";import{S as d}from"./SearchField-GwXiqa2K.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CS3w2nze.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ChLKnNJg.js";import"./clsx-B-dksMZM.js";import"./Form-r6wIXJmO.js";import"./useFocusRing-C06MErgQ.js";import"./index--lNTANJm.js";import"./index-L3mAy6mP.js";import"./Input-B1FGNxTx.js";import"./Hidden-0YDp5zxo.js";import"./Button-w7gIenY9.js";import"./useLabel-DxtLEE3Y.js";import"./useLabels-DSacGDBd.js";import"./useButton-Beja3uNl.js";import"./FieldError-BlsJhfcN.js";import"./Text-D9TOgsmN.js";import"./clsx-Ciqy0D92.js";import"./Text-D50EAg-o.js";import"./RSPContexts-gejQyHLH.js";import"./Group-B675t2Fv.js";import"./useControlledState-CXI3Yibh.js";import"./useLocalizedStringFormatter-CVst0Jjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DbI1Iik8.js";import"./useField-QQnG48hk.js";import"./TextField.module-DdivwlC8.js";import"./search-COmqGEhN.js";import"./createLucideIcon-UApEV6S6.js";import"./x-C1kwUoON.js";import"./useLocalizedStringFormatter-j9dnYAXL.js";import"./Button-MMPxX2Zb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cov8ReYV.js";import"./Collection-BNq3e9X1.js";import"./index-C7yQKzyG.js";import"./DragAndDrop-CdhwxqnI.js";import"./getScrollParent-zw9jGmc3.js";import"./scrollIntoView-D2aT1v_d.js";import"./SelectionIndicator-Cg3C4rFl.js";import"./SelectionManager-CiWhjYbj.js";import"./useEvent-BOB9fAnz.js";import"./useDescription-CE0NAOWk.js";import"./inertValue-D_0SFJzU.js";import"./useHighlightSelectionDescription-C9Gr4vHP.js";import"./useUpdateEffect-CIb3u_ya.js";import"./ListKeyboardDelegate-CImt9RlX.js";import"./useHasTabbableChild-CgzW6gFD.js";import"./Checkbox-BtwCHnb_.js";import"./check-DCY3asdX.js";import"./useToggleState-BdiQ14jL.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
