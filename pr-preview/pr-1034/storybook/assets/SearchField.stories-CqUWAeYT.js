import{r as m,f as l,j as t}from"./iframe-BJhw2N0g.js";import{S as d}from"./SearchField-BtxrQ9vz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-RMZbDLko.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-LSwz2R3F.js";import"./utils-RbG-Aia_.js";import"./useLocalizedStringFormatter-Cl7mz5Qk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DRY1yN2Q.js";import"./useFocusRing-BW39cesy.js";import"./index-EmEFlqRi.js";import"./index-Dqq__9iy.js";import"./useFormValidation-DbGg4kwf.js";import"./useField-Dv7DXL3_.js";import"./Button-BdMf96yr.js";import"./Hidden-BnfcrX-c.js";import"./useLabels-CV-btu-r.js";import"./useButton-C__A5Pf3.js";import"./search-Dq4Ub00V.js";import"./createLucideIcon-IeDQBETZ.js";import"./ClearButton-a3BHFqrK.js";import"./Button-DiHVVB0y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-0P1BRXD7.js";import"./VisuallyHidden-72ICTt_i.js";import"./x-BxZ4QCx-.js";import"./FieldError-C8pmpL6w.js";import"./Text-DyuufO01.js";import"./Text-CXHx80oD.js";import"./RSPContexts-BF5tUZC_.js";import"./Collection-CX5nJlp4.js";import"./index-H1ZMf6bK.js";import"./DragAndDrop-C_GjfAzc.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY1Vs4zO.js";import"./SelectionManager-CrUJtpFM.js";import"./useEvent-C-emn93v.js";import"./useDescription-AGbylvSE.js";import"./inertValue-BywWsnsl.js";import"./useHighlightSelectionDescription-D3sXbwLW.js";import"./useUpdateEffect-D4OUnlJd.js";import"./ListKeyboardDelegate-D2n4TjCs.js";import"./useHasTabbableChild-BmQ6bLuO.js";import"./Checkbox-Lm45NenJ.js";import"./Form-DCLpShRY.js";import"./check-CEDiim9d.js";import"./useToggleState-CpYxY5Oo.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
