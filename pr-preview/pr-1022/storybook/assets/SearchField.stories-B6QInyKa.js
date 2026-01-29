import{r as m,f as l,j as t}from"./iframe-CCE7bbwH.js";import{S as d}from"./SearchField-Cuh9TYq9.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-7_p8Enjm.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DRIq_96A.js";import"./utils-BVaE8NLk.js";import"./useLocalizedStringFormatter-r_KtojUx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-P-502Bm1.js";import"./useFocusRing-COIr_sUJ.js";import"./index-Dp5GmYi7.js";import"./index-aGo1ZsQs.js";import"./useFormValidation-Cqln8SK2.js";import"./useField-DXX-h2WN.js";import"./Button-lT9_7AJU.js";import"./Hidden-D5Jk713G.js";import"./useLabels-Dd7McQGF.js";import"./useButton-CI7aYhes.js";import"./search-CZfg19Y-.js";import"./createLucideIcon-Dc7mzXcy.js";import"./ClearButton-fKZ1SwZ7.js";import"./Button-Dw3HUc-4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CRJLM8ja.js";import"./VisuallyHidden-BPHyXCRO.js";import"./x-5WBMPsQp.js";import"./FieldError-CyHhaVe9.js";import"./Text-DdG9vEac.js";import"./Text-CRHS6IkK.js";import"./RSPContexts-Cc7Msy4D.js";import"./Collection-DLzY31xD.js";import"./index-DmIQK8yC.js";import"./DragAndDrop-Cg_i46oi.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C6rJyLIB.js";import"./SelectionManager-CQ2i0OB5.js";import"./useEvent-O9CTpKHV.js";import"./useDescription-BMgwLMUv.js";import"./inertValue-DFO7kr2O.js";import"./useHighlightSelectionDescription-CaSiUBDg.js";import"./useUpdateEffect-CdOXStOi.js";import"./ListKeyboardDelegate-CNikrRlR.js";import"./useHasTabbableChild-Df2sy4Hk.js";import"./Checkbox-CwTOygTn.js";import"./Form-DxWxZ3xE.js";import"./check-DO0Po3XC.js";import"./useToggleState-B9j3SHLq.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
