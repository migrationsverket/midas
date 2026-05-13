import{r as m,f as l,j as t}from"./iframe-DK3mrAyo.js";import{S as d}from"./SearchField-CGNuPAH_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ChSKBZHo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-KWB3V7Ew.js";import"./clsx-B-dksMZM.js";import"./Form-ZU5Jc3do.js";import"./useFocusRing-GGCG3XqX.js";import"./index-BmaOBGQH.js";import"./index-Cy3OoqhK.js";import"./Input-BNeMn4RE.js";import"./Hidden-B9O9f11_.js";import"./Button-Yd8CTw2L.js";import"./useLabel-CoP8Rogk.js";import"./useLabels-Cjb6VPbR.js";import"./useButton-Ee-WcKk0.js";import"./FieldError-7i4Fax51.js";import"./Text-ChQBgCn7.js";import"./clsx-Ciqy0D92.js";import"./Text-BG4EGVIm.js";import"./RSPContexts-CbpbC2QZ.js";import"./Group-FnEYpQ-A.js";import"./useControlledState-c72KLHwF.js";import"./useLocalizedStringFormatter-CXfqNWhw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CfphWo0U.js";import"./useField-BURaNJxe.js";import"./TextField.module-DdivwlC8.js";import"./search-Xv2JrVsG.js";import"./createLucideIcon-ZHubZ-OE.js";import"./x-Cj5OGhdg.js";import"./useLocalizedStringFormatter-DGfSF0iv.js";import"./Button-BKk1KYPK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CuCKnYKC.js";import"./Collection-DIXCXOkQ.js";import"./index-CepTmLHf.js";import"./DragAndDrop-DYKm57om.js";import"./getScrollParent-CsmfW8t8.js";import"./scrollIntoView-DzztdlRp.js";import"./SelectionIndicator-tPL3-k8A.js";import"./SelectionManager-Dknd4-dt.js";import"./useEvent-q7OaXBNw.js";import"./useDescription-e3GpwAAN.js";import"./inertValue-BtJ26tG3.js";import"./useHighlightSelectionDescription-Bzjkmi7T.js";import"./useUpdateEffect-BRpUNopn.js";import"./ListKeyboardDelegate-jeW_soEh.js";import"./useHasTabbableChild-CfHaVROs.js";import"./Checkbox-Cy_8v4EU.js";import"./check-BiZdBlJV.js";import"./useToggleState-Bym-Bv-P.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
