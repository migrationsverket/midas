import{r as m,f as l,j as t}from"./iframe-DDrwZSUr.js";import{S as d}from"./SearchField-DpUI2JrR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CB1zXpry.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-fZpJvyFO.js";import"./clsx-B-dksMZM.js";import"./Form-CrG6ievP.js";import"./useFocusRing-Co7KnI-2.js";import"./index-BDdESxF6.js";import"./index-2ekyzgHz.js";import"./Input-BwSKmiC0.js";import"./Hidden-BbxqZPAf.js";import"./Button-BBtH1XqU.js";import"./useLabel-B-iHNEQ-.js";import"./useLabels-C-XwBesu.js";import"./useButton-DTzMuBwj.js";import"./FieldError-Dwx20Li1.js";import"./Text-C8zREkr5.js";import"./clsx-Ciqy0D92.js";import"./Text-CsbHuTMa.js";import"./RSPContexts-DBeOTN7L.js";import"./Group-BdlcR2wJ.js";import"./useControlledState-CoaU-25M.js";import"./useLocalizedStringFormatter--0SdXCip.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ce454HzC.js";import"./useField-CG9QcYio.js";import"./TextField.module-DdivwlC8.js";import"./search-DbDW_9sv.js";import"./createLucideIcon-YccigzIq.js";import"./x-CGnJ7BA1.js";import"./useLocalizedStringFormatter-CaCMCUjI.js";import"./Button-B7DQCmWQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dfp2PUpV.js";import"./Collection-DdrG0jfe.js";import"./index-D2JzpI49.js";import"./DragAndDrop-DF_lpz6x.js";import"./getScrollParent-DB8NtD2D.js";import"./scrollIntoView-Dk5DfXO6.js";import"./SelectionIndicator-BA7AxvgT.js";import"./SelectionManager-Pdt05C2-.js";import"./useEvent-v--lpn9l.js";import"./useDescription-Bqe-Zf64.js";import"./inertValue-ELbYNg_D.js";import"./useHighlightSelectionDescription-DNO8bR3m.js";import"./useUpdateEffect-C6rNjT7k.js";import"./ListKeyboardDelegate-TygQEIe6.js";import"./useHasTabbableChild-DyAQ4h2W.js";import"./Checkbox-r_4UI1fM.js";import"./check-Dnl8T4ia.js";import"./useToggleState-x7Sen6KP.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
