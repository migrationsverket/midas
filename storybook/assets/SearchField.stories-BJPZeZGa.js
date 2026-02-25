import{r as m,f as l,j as t}from"./iframe-BMRKkr6e.js";import{S as d}from"./SearchField-DDLc5ung.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CJJpR9g1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CtWZRpAk.js";import"./utils-B-Wd4T21.js";import"./useLocalizedStringFormatter-DHdUL6pM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-9U_j3L1E.js";import"./useFocusRing-CUJDhn4b.js";import"./index-DC2q9WHS.js";import"./index-DM5nM3xE.js";import"./useFormValidation-D3ipRiab.js";import"./useField-BYylXV7g.js";import"./Button-Dhgmb7a4.js";import"./Hidden-l6G7bJI-.js";import"./useLabels-LcBHp2R_.js";import"./useButton-Dx2DQTbk.js";import"./search-DucZNtRG.js";import"./createLucideIcon-DZqSyMAm.js";import"./ClearButton-EdHhzL9w.js";import"./Button-8LMnIdeM.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DwRrqd4W.js";import"./VisuallyHidden-ul3GEQ14.js";import"./x-D17aNKNC.js";import"./FieldError-CYoJn7Ex.js";import"./Text-Dwlww6gP.js";import"./Text-yRvyJMt7.js";import"./RSPContexts-BnN2F5J4.js";import"./Collection-CrtYSmGP.js";import"./index-gixeR2_9.js";import"./DragAndDrop-BUe_RVRB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DdxuIDlF.js";import"./SelectionManager-DiVceX2c.js";import"./useEvent-bPhGLQHX.js";import"./useDescription-C304Q647.js";import"./inertValue-B1R2Gie8.js";import"./useHighlightSelectionDescription-oGGS4xUT.js";import"./useUpdateEffect-DELzf25t.js";import"./ListKeyboardDelegate-CR7uIuuR.js";import"./useHasTabbableChild-Cy0w8C3x.js";import"./Checkbox-DiTIK0Of.js";import"./Form-BSq0XxHe.js";import"./check-0spXETxS.js";import"./useToggleState-CwM9nHpJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
