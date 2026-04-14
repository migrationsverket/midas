import{r as m,f as l,j as t}from"./iframe-BgN3T3xs.js";import{S as d}from"./SearchField-CHFiubIf.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B9cX_jy8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cy9VbIrx.js";import"./clsx-B-dksMZM.js";import"./Form-D63x0QWC.js";import"./useFocusRing-s6LcsVmw.js";import"./index-C8VIyOAM.js";import"./index-DDvZmCCm.js";import"./Input-ZoQ5ytTk.js";import"./Hidden-BUpoh45I.js";import"./Button-BtxXkeGG.js";import"./useLabel-C7Safkp7.js";import"./useLabels-CtvG29M_.js";import"./useButton-CYBdLk3p.js";import"./FieldError-Cg97d-Xo.js";import"./Text-Cws1TLos.js";import"./clsx-Ciqy0D92.js";import"./Text-Bm_qFAHe.js";import"./RSPContexts-Bpqk6zEL.js";import"./Group-FYdA3O0R.js";import"./useControlledState-DuMP6pst.js";import"./useLocalizedStringFormatter-B0LCJo7R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DMHLIgZ7.js";import"./useField-oBOSJSDH.js";import"./TextField.module-DdivwlC8.js";import"./search-agZ23BiA.js";import"./createLucideIcon-BePQROhA.js";import"./x-U-sIlJJn.js";import"./useLocalizedStringFormatter-B8VZY1gF.js";import"./Button-zGEEwAU5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DwUK2ATG.js";import"./Collection-B-iXDbz1.js";import"./index-DFoRH5SL.js";import"./DragAndDrop-mACOygfR.js";import"./getScrollParent-tQwdPnh6.js";import"./scrollIntoView-AzFj4YLb.js";import"./SelectionIndicator-BLCuA8ps.js";import"./SelectionManager-eGbG9yBw.js";import"./useEvent-Ca5NannD.js";import"./useDescription-5FEPrfMM.js";import"./inertValue-D-fqJVOv.js";import"./useHighlightSelectionDescription-Bk7DFwKU.js";import"./useUpdateEffect-CNkAaxoy.js";import"./ListKeyboardDelegate-ClVPUkv2.js";import"./useHasTabbableChild-Dtx26C7V.js";import"./Checkbox-ux6-w8Op.js";import"./check-Bcp44gjk.js";import"./useToggleState-CMcV5OR9.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
