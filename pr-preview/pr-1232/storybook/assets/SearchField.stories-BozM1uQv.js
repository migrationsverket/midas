import{r as m,f as l,j as t}from"./iframe-DOHhMkQY.js";import{S as d}from"./SearchField-C1VZxoSJ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DUhjKcOA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-NiE-K3B6.js";import"./clsx-B-dksMZM.js";import"./Form-Dq5C2lBM.js";import"./useFocusRing-wtRS1Mc0.js";import"./index-BuovvTYt.js";import"./index-ZqaTbfD1.js";import"./Input-DO2yHUEo.js";import"./Hidden-CBYtsSM7.js";import"./Button-BgxX3mlh.js";import"./useLabel-B6n5QJis.js";import"./useLabels-CHqB-BNa.js";import"./useButton-CVPcloPU.js";import"./FieldError-BflqQ1hj.js";import"./Text-DSHHPLHE.js";import"./clsx-Ciqy0D92.js";import"./Text-C8g4NeVM.js";import"./RSPContexts-Cdm3yX79.js";import"./Group-Dmwg-2rd.js";import"./useControlledState-DiXqzo5g.js";import"./useLocalizedStringFormatter-DWccAkCt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbXqGvkj.js";import"./useField-CDafB6bD.js";import"./TextField.module-DdivwlC8.js";import"./search-BOhmwGYJ.js";import"./createLucideIcon-B4Q-AngK.js";import"./x-CkxwwECO.js";import"./useLocalizedStringFormatter-CRECnAOE.js";import"./Button-oYxwaeFk.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DQY1cYBw.js";import"./Collection-C3UaWGRU.js";import"./index-G_V6xOjf.js";import"./DragAndDrop-L3hcuFsH.js";import"./getScrollParent-wRtd1GN9.js";import"./scrollIntoView-DebGkkw1.js";import"./SelectionIndicator-DUS-gEyU.js";import"./SelectionManager-DQ5FBa1D.js";import"./useEvent-DtrFGaiZ.js";import"./useDescription-DUO7dbjU.js";import"./inertValue-Bck5Xh_1.js";import"./useHighlightSelectionDescription-BowjV8fQ.js";import"./useUpdateEffect-B4iM7wiK.js";import"./ListKeyboardDelegate-BwKlEZYr.js";import"./useHasTabbableChild-rx8lhF0P.js";import"./Checkbox-DlSodsjk.js";import"./check-CgAzYqCS.js";import"./useToggleState-BNu4gou2.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
