import{r as m,f as l,j as t}from"./iframe-Ct1ppXcO.js";import{S as d}from"./SearchField-BiLRFifk.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CeMq0Ovi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BMKsiY2b.js";import"./utils-C-gSI02s.js";import"./useLocalizedStringFormatter-ugzqn4XO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BLmDom6j.js";import"./useFocusRing-D22KqsH2.js";import"./index-BZ4GCs5a.js";import"./index-D7mK5nsc.js";import"./useFormValidation-CbVk8cPB.js";import"./useField-C735bYz9.js";import"./Button-Co_Oqhu6.js";import"./Hidden-BnjpnQVL.js";import"./useLabels-BzsjX-uz.js";import"./useButton-BPFKgoal.js";import"./search-Cj2730T4.js";import"./createLucideIcon-BuchYPst.js";import"./ClearButton-C7dkXCK3.js";import"./Button-DGYQQhVQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-k4Ox2Lj6.js";import"./VisuallyHidden-CPthcFHg.js";import"./x-DhEC6HJx.js";import"./FieldError-MCWN8uVd.js";import"./Text-bA96Aj1V.js";import"./Text-BLnUO4XT.js";import"./RSPContexts-DiUMKu6B.js";import"./Collection-BfE2ozAg.js";import"./index-SMovkzve.js";import"./DragAndDrop-Dh7dpGQ1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DQUn9HeB.js";import"./SelectionManager-CFIbccgx.js";import"./useEvent-CQqH1fQz.js";import"./useDescription-D0KYtWwq.js";import"./inertValue-DgDbAbf2.js";import"./useHighlightSelectionDescription-Ddt3LQeO.js";import"./useUpdateEffect-PF7DIFvS.js";import"./ListKeyboardDelegate-DOcJQ6-3.js";import"./useHasTabbableChild-Cf8g4omU.js";import"./Checkbox-BT6bQpzV.js";import"./Form-BEQJjWQu.js";import"./check-Bla-kzTw.js";import"./useToggleState-D7XxsBsL.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
