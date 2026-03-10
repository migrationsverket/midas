import{r as m,f as l,j as t}from"./iframe-DMN73KB2.js";import{S as d}from"./SearchField-XVDmljPY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Mhthd5y1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DtotprCd.js";import"./utils-ytX4X4hU.js";import"./useLocalizedStringFormatter-B6PiDztw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-qdsiCCD2.js";import"./useFocusRing-BhcplY33.js";import"./index-Qnw9UhGM.js";import"./index-DrmiERuM.js";import"./useFormValidation-Cyn12n0z.js";import"./useField-Cym9KaJn.js";import"./Button-CGbtmoIr.js";import"./Hidden-BA-gHfWt.js";import"./useLabels-CRP67w2C.js";import"./useButton-CkF7Pwvg.js";import"./search-DM_WgKqE.js";import"./createLucideIcon-C88Lc7aZ.js";import"./ClearButton-CVwfiHVH.js";import"./Button-Ck576HV9.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CiDW_veP.js";import"./VisuallyHidden-CJkttl4h.js";import"./x-BTagpejN.js";import"./FieldError-DphimPrq.js";import"./Text-DjG6q6Y1.js";import"./Text-B0z8pO1R.js";import"./RSPContexts-Be8xIyRm.js";import"./Collection-BVCQUf8U.js";import"./index-ZVlvUlGw.js";import"./DragAndDrop-CfbEEoxM.js";import"./getScrollParent-tlP_VOWl.js";import"./scrollIntoView-BoaQO-l5.js";import"./SelectionIndicator-CNseZYUo.js";import"./SelectionManager-Cox4bVbR.js";import"./useEvent-I49ndoPs.js";import"./useDescription-lqHqz3yA.js";import"./inertValue-yhiOPcHJ.js";import"./useHighlightSelectionDescription-C3MB8yme.js";import"./useUpdateEffect-CqhW-56X.js";import"./ListKeyboardDelegate-BnhUGRCm.js";import"./useHasTabbableChild-DQCycBgw.js";import"./Checkbox-CQ13MQke.js";import"./Form-Bx3-hLS_.js";import"./check-CtTYe2bu.js";import"./useToggleState-BwvnEG4h.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
