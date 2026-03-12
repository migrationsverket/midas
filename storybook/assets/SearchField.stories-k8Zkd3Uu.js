import{r as m,f as l,j as t}from"./iframe-DkQ7cM23.js";import{S as d}from"./SearchField-QOW8GdCW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-iI4fpqXW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-nr5IMB9l.js";import"./utils-DP89l6Mv.js";import"./useLocalizedStringFormatter-BMIv7Yjf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJBXdHfK.js";import"./useFocusRing-J1vPyQty.js";import"./index-7VbimUOa.js";import"./index-Cm61l895.js";import"./useFormValidation-Dq7frMih.js";import"./useField-m7hj4lqE.js";import"./Button-Bq2iEg50.js";import"./Hidden-CcF5EX2e.js";import"./useLabels-DSl379fi.js";import"./useButton-BmC4cDXT.js";import"./search-DWx5KoR-.js";import"./createLucideIcon-DkseUJ3l.js";import"./ClearButton-Cb0swx7L.js";import"./x-CkWkpKml.js";import"./Button-rAjKvaV6.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C95F42C0.js";import"./VisuallyHidden-DiP98uOJ.js";import"./FieldError-BqQ6odJM.js";import"./Text-mqMgoxWe.js";import"./Text-DsOkgq9m.js";import"./RSPContexts-9PmMy4Xi.js";import"./Collection-Vv4nNf0n.js";import"./index-CloDF_gA.js";import"./DragAndDrop-GahRsYmw.js";import"./getScrollParent-C8j_9fYa.js";import"./scrollIntoView-DGwr96lc.js";import"./SelectionIndicator-DvMKftvJ.js";import"./SelectionManager-5ZpvjCOe.js";import"./useEvent-grDVPgOX.js";import"./useDescription-D6gfKm05.js";import"./inertValue-BSuFgDpz.js";import"./useHighlightSelectionDescription-B6JFP4IN.js";import"./useUpdateEffect-Y8k3yS49.js";import"./ListKeyboardDelegate-De3HO-6t.js";import"./useHasTabbableChild-BNNTEIzd.js";import"./Checkbox-wbkWZ_2R.js";import"./Form-DzbNYJh9.js";import"./check-qoUAuvVR.js";import"./useToggleState-DmBXFeMt.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
