import{r as m,f as l,j as t}from"./iframe-goP8imCK.js";import{S as d}from"./SearchField-B4HwOfwA.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DU9tOemE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CK6_hlZX.js";import"./utils-D97N4ORW.js";import"./useLocalizedStringFormatter-5g3MeGHg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-2mAEEhej.js";import"./useFocusRing-D7HTnxbj.js";import"./index-UqNR_IG4.js";import"./index-CvvtcQxC.js";import"./useFormValidation-R1RtiSXs.js";import"./useField-MY_dj48I.js";import"./Button-CnchVFFe.js";import"./Hidden-x8iT2j8D.js";import"./useLabels-KHl-vYzN.js";import"./useButton-UIJcfSO0.js";import"./search-Ctzd1OaS.js";import"./createLucideIcon-Bja-RJnq.js";import"./ClearButton-Cbus4BR4.js";import"./Button-Bamq_8Qe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fhyQcR-T.js";import"./VisuallyHidden-Bk8wprlF.js";import"./x-b-ZywUqK.js";import"./FieldError-DvD6etUO.js";import"./Text-Bl2otZFr.js";import"./Text-DqafpL3h.js";import"./RSPContexts-BWY-CEwa.js";import"./Collection-2p1YYWZC.js";import"./index-DzhSEPgE.js";import"./DragAndDrop-Csc6zbIj.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CC9Kh-G_.js";import"./SelectionManager-COI7Qxov.js";import"./useEvent-DFlAQp2Z.js";import"./useDescription-CwsM3XiG.js";import"./inertValue-BlCVm1oe.js";import"./useHighlightSelectionDescription-Bx3tAFpz.js";import"./useUpdateEffect-uxNCBw-1.js";import"./ListKeyboardDelegate-Dk7nWPad.js";import"./useHasTabbableChild-Cyg0ODYG.js";import"./Checkbox-CgM3MU8R.js";import"./Form-CVDyocQS.js";import"./check-DFJpWW96.js";import"./useToggleState-CvpuW8D-.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
