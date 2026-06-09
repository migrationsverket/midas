import{r as m,f as l,j as t}from"./iframe-CaeJqQ8f.js";import{S as d}from"./SearchField-B4A6DxU-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B0OHpw7z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BteVPZy0.js";import"./clsx-B-dksMZM.js";import"./Form-CA7TkeoX.js";import"./useFocusRing-B-IWjK53.js";import"./index-DqQtAxv6.js";import"./index-CeMSaifd.js";import"./Input-CpOyXK4o.js";import"./Hidden-DAb19HuU.js";import"./Button-CmYrsmdS.js";import"./useLabel-DiiZxaHU.js";import"./useLabels-CvBePrBc.js";import"./useButton-BT2OPEq9.js";import"./FieldError-BMeh3Mm5.js";import"./Text-kWHKD_uI.js";import"./clsx-Ciqy0D92.js";import"./Text-23GvJn9a.js";import"./RSPContexts-C23pPjhB.js";import"./Group-CTKcef7T.js";import"./useControlledState-DVDrYLuR.js";import"./useLocalizedStringFormatter-B6KzQfdD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-OY8v5_0u.js";import"./useField-DDJhIXmw.js";import"./TextField.module-DdivwlC8.js";import"./search-PtOO4Frg.js";import"./createLucideIcon-Bkh4JM6J.js";import"./x-BNT6PRWH.js";import"./useLocalizedStringFormatter-CsL4vBQb.js";import"./Button-rTp5uTED.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CDogNmlo.js";import"./Collection-Dcy9D0L3.js";import"./index-BBE2CXqT.js";import"./DragAndDrop-DMsOJZxY.js";import"./getScrollParent-B7OSUguh.js";import"./scrollIntoView-Dv9TGF9T.js";import"./SelectionIndicator-DzgiSh9y.js";import"./SelectionManager-bLePU0IW.js";import"./useEvent-DrhgR5ub.js";import"./useDescription-BGB3EMY_.js";import"./inertValue-CHahpjmF.js";import"./useHighlightSelectionDescription-DuZZB_SN.js";import"./useUpdateEffect-DtEaS4ed.js";import"./ListKeyboardDelegate-GnYqBagy.js";import"./useHasTabbableChild-pjFZgowB.js";import"./Checkbox-tbmTpGAs.js";import"./check-BhAO1PBy.js";import"./useToggleState-CGuS8eVX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
