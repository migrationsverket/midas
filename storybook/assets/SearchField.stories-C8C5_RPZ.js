import{r as m,f as l,j as t}from"./iframe-DDkxC9AE.js";import{S as d}from"./SearchField-CtO6Hsti.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CtUWj9Jr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bv-3ie4X.js";import"./clsx-B-dksMZM.js";import"./Form-CGJqMPHB.js";import"./useFocusRing-C43-8fCQ.js";import"./index-BLH1qvEF.js";import"./index-C98fnEDe.js";import"./Input-DkmOOcYX.js";import"./Hidden-BdbLRp3U.js";import"./Button-CUTFiFAp.js";import"./useLabel-LlSNGQxT.js";import"./useLabels-ClPbn0aQ.js";import"./useButton-B95KM6rf.js";import"./FieldError-B9fj7azt.js";import"./Text-BtXc1lRV.js";import"./clsx-Ciqy0D92.js";import"./Text-1G0eP0RO.js";import"./RSPContexts-C5FShT2F.js";import"./Group-COxqjzKt.js";import"./useControlledState-DDBKKIZJ.js";import"./useLocalizedStringFormatter-em54CWSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ViwtlI3S.js";import"./useField-DdUlwoVZ.js";import"./TextField.module-DdivwlC8.js";import"./search-ChdjbgI5.js";import"./createLucideIcon-tquE4JOn.js";import"./x-zjzglfs-.js";import"./useLocalizedStringFormatter-DdWGKtAM.js";import"./Button-nixYBadL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ZtpMBoq6.js";import"./Collection-CMDg-C_S.js";import"./index-B-3MKQwG.js";import"./DragAndDrop-dVQfFzCl.js";import"./getScrollParent-XviTZluJ.js";import"./scrollIntoView-BuO0Q3pl.js";import"./SelectionIndicator-D-EQnl1p.js";import"./SelectionManager-CbRDXdwz.js";import"./useEvent-DM9NFQXa.js";import"./useDescription-B6KDpjFY.js";import"./inertValue-Bc6wd3oJ.js";import"./useHighlightSelectionDescription-Cv-fyJOb.js";import"./useUpdateEffect-CWN_vSg7.js";import"./ListKeyboardDelegate-BtZE-5Nj.js";import"./useHasTabbableChild-D9Kjokl8.js";import"./Checkbox-C3hgBi4u.js";import"./check-BZS5NC6P.js";import"./useToggleState-CckjuNoe.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
