import{r as m,f as l,j as t}from"./iframe-8kNNjGPs.js";import{S as d}from"./SearchField-Eu131Buj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-v4SbIhOo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cu0NDb2D.js";import"./utils-BUzQLJoB.js";import"./useLocalizedStringFormatter-gfDb4gw1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCbURsre.js";import"./useFocusRing-DOlZhwGN.js";import"./index-vpPlhTCt.js";import"./index-CY9KIRXZ.js";import"./useFormValidation-C8-qwhmM.js";import"./useField-B_eNRLp8.js";import"./Button-BMyY3aLP.js";import"./Hidden-jzFhZXSA.js";import"./useLabels-C_3EwP0f.js";import"./useButton-D_bc-eEZ.js";import"./search-Bh4kdCY5.js";import"./createLucideIcon-D0Msiesm.js";import"./ClearButton-B6y7C2n9.js";import"./x-DUSFswnG.js";import"./Button-BdMqRHYH.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-c_MYqT_W.js";import"./VisuallyHidden-BY2ZOU88.js";import"./FieldError-DFfowcOQ.js";import"./Text-DzkFi4rT.js";import"./Text-CS5lJlaQ.js";import"./RSPContexts-D6QBp_i-.js";import"./Collection-B94qNX-L.js";import"./index-N81UcEwH.js";import"./DragAndDrop-CysqtQsc.js";import"./getScrollParent-C9iJgPHi.js";import"./scrollIntoView-Dp__3D12.js";import"./SelectionIndicator-BH01pR8s.js";import"./SelectionManager-B6niOt_f.js";import"./useEvent-D90UEmSc.js";import"./useDescription-CitCh8vm.js";import"./inertValue-CgFjf2be.js";import"./useHighlightSelectionDescription-SeT4l9h5.js";import"./useUpdateEffect-KAXluVAo.js";import"./ListKeyboardDelegate-DYBXhtk7.js";import"./useHasTabbableChild-C23Nywfw.js";import"./Checkbox-Ba4oIwom.js";import"./Form-CzcHO5Ii.js";import"./check-CQSibtrN.js";import"./useToggleState-CF21HXa8.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
