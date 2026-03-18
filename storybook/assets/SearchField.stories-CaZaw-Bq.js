import{r as m,f as l,j as t}from"./iframe-C7t9iVAP.js";import{S as d}from"./SearchField-Di3vXtc-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BJiclHW2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-yNJAK2-f.js";import"./utils-DHL4vNoB.js";import"./useLocalizedStringFormatter-CVtX0aD4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C3oOI1qI.js";import"./useFocusRing-BBkvSuUI.js";import"./index-D_TWd0tg.js";import"./index-C8AjsPH3.js";import"./useFormValidation-DY--XCK0.js";import"./useField-_wTvKlys.js";import"./Button-DR73eWoN.js";import"./Hidden-DFB5LB9u.js";import"./useLabels-DBb3W9ZQ.js";import"./useButton-CqHRV2Gu.js";import"./search-Bw2Y-THm.js";import"./createLucideIcon-CJwkvU5U.js";import"./ClearButton-BkT0l3t_.js";import"./x-PvqyWiho.js";import"./Button-DtM-QtSV.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CR-t_tu1.js";import"./VisuallyHidden-DGjmnIGg.js";import"./FieldError-D02kFtkC.js";import"./Text-DHSnms-3.js";import"./Text-DLwF4mI3.js";import"./RSPContexts-CMbSZKKN.js";import"./Collection-BHety989.js";import"./index-BCuOjvAT.js";import"./DragAndDrop-Bvk20IFk.js";import"./getScrollParent-DLQAjZDh.js";import"./scrollIntoView-CXA6LuS7.js";import"./SelectionIndicator-BUBEQaAn.js";import"./SelectionManager-Dz4ocvIO.js";import"./useEvent-DKYdhuF3.js";import"./useDescription-CcHmFyqs.js";import"./inertValue-miid3rOn.js";import"./useHighlightSelectionDescription-CSLAMWA_.js";import"./useUpdateEffect-CTQToTt9.js";import"./ListKeyboardDelegate-DdrIfvWn.js";import"./useHasTabbableChild-Bgd1MbAO.js";import"./Checkbox-LLzLILRU.js";import"./Form-BzvUvODL.js";import"./check-DOGLP-EO.js";import"./useToggleState-sf9OhJyc.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
