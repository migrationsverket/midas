import{r as m,f as l,j as t}from"./iframe-Dl_ZEAw_.js";import{S as d}from"./SearchField-B-nNDqjR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dtva6W7f.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BBjZ-p-J.js";import"./utils-qArlt3QR.js";import"./useLocalizedStringFormatter-CZjhQNpd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DWfHNTEK.js";import"./useFocusRing-BadRLYOI.js";import"./index-BBK-ahHU.js";import"./index-9pBu4mcS.js";import"./useFormValidation-vxZMHFxu.js";import"./useField-DyugcTbx.js";import"./Button-Bhf2TykO.js";import"./Hidden-I_e1q7UG.js";import"./useLabels-CH32VCLn.js";import"./useButton-CgsE8t_H.js";import"./search-B5N0TFnF.js";import"./createLucideIcon-xHw9Gsln.js";import"./ClearButton-D5nrrgIY.js";import"./Button-COrJAjql.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DU3dXRGP.js";import"./VisuallyHidden-kMLlKce4.js";import"./x-BXfpE1Va.js";import"./FieldError-UQabDpKY.js";import"./Text-CFgDWcau.js";import"./Text-LOlP3muv.js";import"./RSPContexts-H1zv-_Zf.js";import"./Collection-DH0CocWE.js";import"./index-CLGNexvb.js";import"./DragAndDrop-NU-xUlOl.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqabxLAl.js";import"./SelectionManager-kDqWfjBV.js";import"./useEvent-BKVERzXX.js";import"./useDescription-_k4XNsw_.js";import"./inertValue-cyJWMpBd.js";import"./useHighlightSelectionDescription-DbwlNb86.js";import"./useUpdateEffect-D2H4fgNL.js";import"./ListKeyboardDelegate-DxE_0iuR.js";import"./useHasTabbableChild-Dev67yPS.js";import"./Checkbox-BUr_oqk-.js";import"./Form-Pc85qXYh.js";import"./check-CDzIu9a4.js";import"./useToggleState-CT8KEKji.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
