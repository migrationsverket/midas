import{r as m,f as l,j as t}from"./iframe-kL-Bl9su.js";import{S as d}from"./SearchField-DtQQSSsG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-LbJzOwDh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CCkzC0Tp.js";import"./utils-DSQv1swn.js";import"./useLocalizedStringFormatter-5N1OdqKK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChLbIJms.js";import"./useFocusRing-B8gpdiRk.js";import"./index-9Z-HIz-6.js";import"./index-Dc0KIhb6.js";import"./useFormValidation-BcwglGOS.js";import"./useField-sDMwGprV.js";import"./Button-C3MzL_5z.js";import"./Hidden-fIPo0I_L.js";import"./useLabels-CH1yRhK0.js";import"./useButton-PS6G0SsP.js";import"./search-CWgAUWmQ.js";import"./createLucideIcon-DoVMa1bS.js";import"./ClearButton-B-6uShvj.js";import"./Button-BrThkrNe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhEyUNPu.js";import"./VisuallyHidden-Ddmz6g6z.js";import"./x-NxB05lgA.js";import"./FieldError-CmUNHjx9.js";import"./Text-Csjavnr3.js";import"./Text-Brx6h1NF.js";import"./RSPContexts-zPihLAoF.js";import"./Collection-V9ENYK9P.js";import"./index-C6yzV3k4.js";import"./DragAndDrop-DWQ6Io-Q.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B4koSPdu.js";import"./SelectionManager-ALK4G4BP.js";import"./useEvent-BRxC_QDj.js";import"./useDescription-D6WKBftS.js";import"./inertValue-CYl0Ocmh.js";import"./useHighlightSelectionDescription-DaAT62Y4.js";import"./useUpdateEffect-D0hpnuY1.js";import"./ListKeyboardDelegate-C_l6nDbK.js";import"./useHasTabbableChild-CKcBsHy8.js";import"./Checkbox-Btl38iGy.js";import"./Form-75sFirUb.js";import"./check-B_KzR74M.js";import"./useToggleState-Cp_yD_Z3.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
