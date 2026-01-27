import{r as m,f as l,j as t}from"./iframe-C1JT45wI.js";import{S as d}from"./SearchField-C1GvzPH-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CWCHbdOa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-1gHrzrW8.js";import"./utils-B3mA2zMb.js";import"./useLocalizedStringFormatter-BMOogDa6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6AtaOWLD.js";import"./useFocusRing-CMjH5GB-.js";import"./index-C7sIRXbI.js";import"./index-Ddf_a0id.js";import"./useFormValidation-DlaAewcn.js";import"./useField-ClfrWth6.js";import"./Button-iYwZhBmL.js";import"./Hidden-B97wECjB.js";import"./useLabels-DEpiNBM8.js";import"./useButton-gvMW1tsr.js";import"./search-BLi4Uym9.js";import"./createLucideIcon-DjE8uKST.js";import"./ClearButton-fGRPrYRi.js";import"./Button-Cvr3NX4g.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-OdPEDV.js";import"./VisuallyHidden-CExqZ3An.js";import"./x-BEtEw_xa.js";import"./FieldError-CRFea137.js";import"./Text-Do4Hf0SC.js";import"./Text-BnVMb_Eh.js";import"./RSPContexts-DsZAf0Kq.js";import"./Collection-D6aLFlgl.js";import"./index-NpDGjW3p.js";import"./DragAndDrop-DOBWhtGu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQBUQ4k9.js";import"./SelectionManager-Bfq0-7_-.js";import"./useEvent-CMhUQfXy.js";import"./useDescription-AygReMNv.js";import"./inertValue-hV9g7CIh.js";import"./useHighlightSelectionDescription-CCPEqCLs.js";import"./useUpdateEffect-BLVflKZM.js";import"./ListKeyboardDelegate-B7KmNsgj.js";import"./useHasTabbableChild-Cs5nG835.js";import"./Checkbox-Di5P7n8j.js";import"./Form-CmZHX-Gu.js";import"./check-B0G9DJKh.js";import"./useToggleState-DQ6qqjDm.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
