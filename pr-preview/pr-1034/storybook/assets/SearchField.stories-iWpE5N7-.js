import{r as m,f as l,j as t}from"./iframe-C_RGnjGF.js";import{S as d}from"./SearchField-Dm9yFeXq.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CsKnUoYd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DtWpqbpS.js";import"./utils-CizOIJwG.js";import"./useLocalizedStringFormatter-Bnrb7dzs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DXloCJTo.js";import"./useFocusRing-BF7aoqv-.js";import"./index-tt1S6LDy.js";import"./index-CO49tAAQ.js";import"./useFormValidation-Cl2Fp_bL.js";import"./useField-BQq33uh0.js";import"./Button-DuBv3q_5.js";import"./Hidden-BRwSW5Hr.js";import"./useLabels-BfoE21n1.js";import"./useButton-CLPY3zOp.js";import"./search-Dl-rOTPB.js";import"./createLucideIcon-Dw11k2K7.js";import"./ClearButton-BzD0iDJo.js";import"./Button-zzC5AJk8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEWE3auq.js";import"./VisuallyHidden-DR_ZosVl.js";import"./x-BD8VkNC2.js";import"./FieldError-ChB1xIDl.js";import"./Text-CHUsilgm.js";import"./Text-BVmb7BBG.js";import"./RSPContexts-DrxxWwfc.js";import"./Collection-D1LloZ8c.js";import"./index-DJrS3l3t.js";import"./DragAndDrop-B0ruR-Ox.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_F0b1L_.js";import"./SelectionManager-BmgWiN_j.js";import"./useEvent-Dx80kgdU.js";import"./useDescription-BxKH-cOf.js";import"./inertValue-CSilY8vu.js";import"./useHighlightSelectionDescription-BC-EZqsT.js";import"./useUpdateEffect-DxuzfQdl.js";import"./ListKeyboardDelegate-DqDk3m8N.js";import"./useHasTabbableChild-DAxqis6v.js";import"./Checkbox-C70cl9Bh.js";import"./Form-Dbvvi4Py.js";import"./check-JoIyDfEi.js";import"./useToggleState-BkDvIlgo.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
