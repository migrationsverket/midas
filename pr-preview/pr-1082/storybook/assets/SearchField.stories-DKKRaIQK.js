import{r as m,f as l,j as t}from"./iframe-DZnWAGNq.js";import{S as d}from"./SearchField-Bn4A1uEL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CMugxNfV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Btsh_mej.js";import"./clsx-B-dksMZM.js";import"./Form-CG9hywiv.js";import"./useFocusRing-BZzOLfX3.js";import"./index--cp8vNXJ.js";import"./index-DH1eMf2P.js";import"./Input-BBO63mR7.js";import"./Hidden-Dc0Ha1vW.js";import"./Button-BTPuoZ6n.js";import"./useLabel-iphFOCA9.js";import"./useLabels-bUzroRw2.js";import"./useButton-DqeMFL8_.js";import"./FieldError-BtctqwaV.js";import"./Text-8pdzY51Q.js";import"./clsx-Ciqy0D92.js";import"./Text-Db4n8kvt.js";import"./RSPContexts-CXYZROJa.js";import"./Group-BT1uP5Tz.js";import"./useControlledState-6kQgBtxG.js";import"./useLocalizedStringFormatter-BNHvIU-7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DQnkPp5b.js";import"./useField-CizEGine.js";import"./TextField.module-DdivwlC8.js";import"./search-BH6y9JcF.js";import"./createLucideIcon-DnUFLHhp.js";import"./x-B3FTSjlW.js";import"./useLocalizedStringFormatter-GZqDfzDD.js";import"./Button-DcP_UxfK.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-BIds43GM.js";import"./Collection-C5d1-j9T.js";import"./index-CEga0pt2.js";import"./DragAndDrop-DP0bWAkD.js";import"./getScrollParent-5LQJ6MUd.js";import"./scrollIntoView-BEWtuar9.js";import"./SelectionIndicator-W5u8necK.js";import"./SelectionManager-BxFJ5IQA.js";import"./useEvent-BKkN6iVY.js";import"./useDescription-BbNu-u1f.js";import"./inertValue-DM1MAVQT.js";import"./useHighlightSelectionDescription-CPwCToj2.js";import"./useUpdateEffect-JaSxezPb.js";import"./ListKeyboardDelegate-CWkiXoVF.js";import"./useHasTabbableChild-CiXnYG1R.js";import"./Checkbox-zoAgnL1I.js";import"./check-K_YjScVp.js";import"./useToggleState-ZASCkYre.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
