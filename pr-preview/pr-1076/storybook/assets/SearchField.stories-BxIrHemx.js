import{r as m,f as l,j as t}from"./iframe-C9ubgLgC.js";import{S as d}from"./SearchField-ms4u5H3i.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Xe_ToEoK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DqLuvFKD.js";import"./utils-DGXfXGIv.js";import"./useLocalizedStringFormatter-bbG7Wq0q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D64FrxUa.js";import"./useFocusRing-4O8j9jv4.js";import"./index-BNV1MXTe.js";import"./index-Bwb2HpPH.js";import"./useFormValidation-XFKbkoIj.js";import"./useField-CbMf_VdX.js";import"./Button-BlG7CmiH.js";import"./Hidden-Azh09GXQ.js";import"./useLabels-Df_ryvuT.js";import"./useButton-DfAsmtKq.js";import"./search-CzCur9Vq.js";import"./createLucideIcon-SsBWnnbL.js";import"./ClearButton-B8zMT5uG.js";import"./Button-Dt-Z81qJ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bh2zxf8s.js";import"./VisuallyHidden-BHt-U9wp.js";import"./x-BMYCRDHP.js";import"./FieldError-CVXyG8VI.js";import"./Text-DzDyHzow.js";import"./Text-CL8RRho7.js";import"./RSPContexts-Dm9gjtI5.js";import"./Collection-DTwVVniI.js";import"./index-D11ngsUp.js";import"./DragAndDrop-dyCBDJS4.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-tP0gd4qo.js";import"./SelectionManager-D2OfJ91j.js";import"./useEvent-BMkaTr7g.js";import"./useDescription-DsXkWwWK.js";import"./inertValue-0HzhSkwD.js";import"./useHighlightSelectionDescription-Bqv2CAA3.js";import"./useUpdateEffect-D5ZW9iOq.js";import"./ListKeyboardDelegate-DEcFwDZ4.js";import"./useHasTabbableChild-Bw50mSa7.js";import"./Checkbox-CykhvZlM.js";import"./Form-DjrwUDpY.js";import"./check-DKUqkjmL.js";import"./useToggleState-CMSB8Xb-.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
