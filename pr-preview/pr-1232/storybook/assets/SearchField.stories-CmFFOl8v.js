import{r as m,f as l,j as t}from"./iframe-Csum_Dn_.js";import{S as d}from"./SearchField-BGhCk4Oq.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C-B4VWWF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ge-V0544.js";import"./clsx-B-dksMZM.js";import"./Form-DtazZjcv.js";import"./useFocusRing-ClEYMHRu.js";import"./index-BVxqAi5_.js";import"./index-k_0Ayxip.js";import"./Input-DRNfRwEn.js";import"./Hidden-CxHKwZ6C.js";import"./Button-BUrmgwKE.js";import"./useLabel-Ca_R4Gv6.js";import"./useLabels-DlHehStK.js";import"./useButton-Cjc9nZaQ.js";import"./FieldError-JqGe9xU9.js";import"./Text-D-PYeQb1.js";import"./clsx-Ciqy0D92.js";import"./Text-tsq8PiKH.js";import"./RSPContexts-CufW8UMt.js";import"./Group-D0rK0BGE.js";import"./useControlledState-CRJrM8G1.js";import"./useLocalizedStringFormatter-CsJPWzRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6JknOgh-.js";import"./useField-Dre-fZ9m.js";import"./TextField.module-DdivwlC8.js";import"./search-VO588sDW.js";import"./createLucideIcon-Bn5Z2gKp.js";import"./x-ClDHgqDO.js";import"./useLocalizedStringFormatter-CfCv-5fd.js";import"./Button-dhowh8Zu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDF8meml.js";import"./Collection-CkQ8sCKj.js";import"./index-BdWGuIGp.js";import"./DragAndDrop-sIEvwl-t.js";import"./getScrollParent-BZSpcJr9.js";import"./scrollIntoView-Dy2xPLMm.js";import"./SelectionIndicator-CZyP-Kby.js";import"./SelectionManager-CFugCQ0I.js";import"./useEvent-CwVY4pnK.js";import"./useDescription-LL4f_7qE.js";import"./inertValue-hMe3iOCz.js";import"./useHighlightSelectionDescription-BCYjtjJE.js";import"./useUpdateEffect-vp2ruFlK.js";import"./ListKeyboardDelegate-nOZRNgMP.js";import"./useHasTabbableChild-luGRxQmE.js";import"./Checkbox-CG8SStEU.js";import"./check-DO7Q_IUX.js";import"./useToggleState-CnFR2tm4.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
