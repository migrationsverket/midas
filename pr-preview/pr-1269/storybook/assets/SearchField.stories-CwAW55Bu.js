import{r as m,f as l,j as t}from"./iframe-DLIfUtVm.js";import{S as d}from"./SearchField-C0HXgpZu.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DO0ACofa.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DijK3BhG.js";import"./clsx-B-dksMZM.js";import"./Form-BSZhUe1f.js";import"./useFocusRing-B-eRA-0U.js";import"./index-ic1LOc6Q.js";import"./index-BmToxQMH.js";import"./Input-BzY6P365.js";import"./Hidden-gQ2c-O38.js";import"./Button-DjhlSD9p.js";import"./useLabel-CMC2PGue.js";import"./useLabels-D1ty8LnF.js";import"./useButton-B7XowPCf.js";import"./FieldError-BHIohEsL.js";import"./Text-BOHNy1km.js";import"./clsx-Ciqy0D92.js";import"./Text-CpkwsxmM.js";import"./RSPContexts-D91XMIa7.js";import"./Group-ckdiMqG1.js";import"./useControlledState-TKTqriB6.js";import"./useLocalizedStringFormatter-4oJDcrPd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgzQ8hLd.js";import"./useField-DQBV-Tta.js";import"./TextField.module-DdivwlC8.js";import"./search-OT6jlGdg.js";import"./createLucideIcon-D_WvFzuZ.js";import"./x-DxaaQwzc.js";import"./useLocalizedStringFormatter-vmL8Qz6d.js";import"./Button-C_w78fqJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B6pFoD4c.js";import"./Collection-cGfgXwcY.js";import"./index--ml_NepL.js";import"./DragAndDrop-DgbV-4ZJ.js";import"./getScrollParent-QlPDcvR1.js";import"./scrollIntoView-C8C62cn2.js";import"./SelectionIndicator-XUvq_wYE.js";import"./SelectionManager-B5QpEOZo.js";import"./useEvent-COzGA22f.js";import"./useDescription-BaeFvinJ.js";import"./inertValue-V0I9ZbFZ.js";import"./useHighlightSelectionDescription-Qpy43y7a.js";import"./useUpdateEffect-BVTowmdB.js";import"./ListKeyboardDelegate-DQOkQRlN.js";import"./useHasTabbableChild-G5pQlYnk.js";import"./Checkbox-wcSgrRP0.js";import"./check-Df1Lg8Nd.js";import"./useToggleState-Cl8Y6j-M.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
