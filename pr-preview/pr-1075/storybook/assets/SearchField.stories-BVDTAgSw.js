import{r as m,f as l,j as t}from"./iframe-DJytE9jg.js";import{S as d}from"./SearchField-B1DqgLL7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table--eFDTbfD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-_v_byBHa.js";import"./utils-VHUq0skz.js";import"./useLocalizedStringFormatter-CxnQTRGL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUl71Zcl.js";import"./useFocusRing-Vnrwenoe.js";import"./index-B-f9OSEP.js";import"./index-PioAU-tD.js";import"./useFormValidation-DfqdalkR.js";import"./useField-B0waFkY3.js";import"./Button-CVNkhFVY.js";import"./Hidden-DKrVS7N8.js";import"./useLabels-CkATJGoJ.js";import"./useButton-CQ5agqnn.js";import"./search-DaszBRVL.js";import"./createLucideIcon-BQp7PZIZ.js";import"./ClearButton-BUynl046.js";import"./Button-C9t41CsC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DspRbcc6.js";import"./VisuallyHidden-CffJ4x8N.js";import"./x-ClmUGKux.js";import"./FieldError-B3osPoIK.js";import"./Text-Bdh14pRr.js";import"./Text-DlvIzI2Z.js";import"./RSPContexts-C8SqMLv_.js";import"./Collection-DU_4Nury.js";import"./index-CINcpYxA.js";import"./DragAndDrop-Ch8Dka6e.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-YHfiMVAf.js";import"./SelectionManager-BfwpH8_C.js";import"./useEvent-DGji_m9a.js";import"./useDescription-DI9NSFVt.js";import"./inertValue-mVVoeXHY.js";import"./useHighlightSelectionDescription-DIMy7bMV.js";import"./useUpdateEffect-BVDZCEJF.js";import"./ListKeyboardDelegate-ZZ_q-Bvn.js";import"./useHasTabbableChild-rc9X2gm2.js";import"./Checkbox-BDoHLLXg.js";import"./Form-DHzUoCnh.js";import"./check-Bnm1192q.js";import"./useToggleState-g7NXNdtG.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
