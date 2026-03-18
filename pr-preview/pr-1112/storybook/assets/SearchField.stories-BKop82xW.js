import{r as m,f as l,j as t}from"./iframe-BWIE8y1J.js";import{S as d}from"./SearchField-CIQ_z6hC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CUf50Hf4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-lz_f80Ux.js";import"./utils-CFen-6Tt.js";import"./useLocalizedStringFormatter-BmqPCVAe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-bUCF8UIG.js";import"./useFocusRing-CeRcfsBW.js";import"./index-BQbDDAyZ.js";import"./index-CBFugdgC.js";import"./useFormValidation-DD0xfOTY.js";import"./useField-ZPISWi-E.js";import"./Button-BmJwA7TX.js";import"./Hidden-CsKeLRVA.js";import"./useLabels-CSgzIvv9.js";import"./useButton-lbVBAiGE.js";import"./search-DVsUDX-j.js";import"./createLucideIcon-BmTkHA-q.js";import"./ClearButton-N7AFBFeC.js";import"./x-DszmzPSL.js";import"./Button-Bhvh_nWe.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bj-PcblM.js";import"./VisuallyHidden-nM3_t9w5.js";import"./FieldError-DQP9cPYO.js";import"./Text-CGdD-JKO.js";import"./Text-LCrvkG-q.js";import"./RSPContexts-D6p6nrlG.js";import"./Collection-Bg_dNDsQ.js";import"./index-ChxbMPWK.js";import"./DragAndDrop-CeUPae3A.js";import"./getScrollParent-Djcm2OaX.js";import"./scrollIntoView-CeNGtx-R.js";import"./SelectionIndicator-BO5Qnhtg.js";import"./SelectionManager-DgudSWxj.js";import"./useEvent-0NTm2RcH.js";import"./useDescription-tI3vnHYy.js";import"./inertValue-C2CZcqI0.js";import"./useGridSelectionCheckbox-Bm5J3kID.js";import"./useHighlightSelectionDescription-DLsPmCoA.js";import"./useUpdateEffect-CEhd0Uc5.js";import"./ListKeyboardDelegate-B7MchG2u.js";import"./useHasTabbableChild-Bs4iW09T.js";import"./Checkbox-Ct-xw609.js";import"./Form-BR5_CXxH.js";import"./check-C0qjp1B9.js";import"./useToggleState-Z6Fhcp1w.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
