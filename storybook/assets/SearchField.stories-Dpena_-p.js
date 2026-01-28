import{r as m,f as l,j as t}from"./iframe-CQYEjdz_.js";import{S as d}from"./SearchField-DS6mCPi1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DGJ5zCFu.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-08K4jq70.js";import"./utils-CsTu9ikS.js";import"./useLocalizedStringFormatter-D_GTQ1_w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUnPMd7N.js";import"./useFocusRing-DlWhQp2A.js";import"./index-Vqw8ZxGg.js";import"./index-COoMP5iC.js";import"./useFormValidation-CFo8G_qj.js";import"./useField-6eaY4RPJ.js";import"./Button-CvToZ011.js";import"./Hidden-4CIPvtTu.js";import"./useLabels-h4L6WHo6.js";import"./useButton-BvkZHVI6.js";import"./search-B66k2-Kl.js";import"./createLucideIcon-B-IrTLpd.js";import"./ClearButton-DyK3W7B1.js";import"./Button-Cg9zZZ7J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Nl9tDDDD.js";import"./VisuallyHidden-CRBj22op.js";import"./x-BbpD6m52.js";import"./FieldError-DI5FZj2R.js";import"./Text-D3mzemNj.js";import"./Text-C9HsrLdv.js";import"./RSPContexts-CSrO3WzH.js";import"./Collection-BAUdRdO0.js";import"./index-Ca1-4qPN.js";import"./DragAndDrop-DIWh8baA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-kTOIYhGF.js";import"./SelectionManager-DPVZxLwg.js";import"./useEvent-BdUP91sh.js";import"./useDescription-CR3C3alu.js";import"./inertValue-C31qLkaN.js";import"./useHighlightSelectionDescription-ByF3Tlw7.js";import"./useUpdateEffect-B3-QfnnS.js";import"./ListKeyboardDelegate-C62sOce2.js";import"./useHasTabbableChild-DwcsJ6a7.js";import"./Checkbox-D35ahYK3.js";import"./Form-C3zHxAYs.js";import"./check-CgmrGzBx.js";import"./useToggleState-J4GUc0sY.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
