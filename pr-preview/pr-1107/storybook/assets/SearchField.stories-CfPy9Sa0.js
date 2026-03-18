import{r as m,f as l,j as t}from"./iframe-C_3vuCKG.js";import{S as d}from"./SearchField-BLNszr_M.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Caqkivl9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B6_sgsXL.js";import"./utils-CTZ-lGkv.js";import"./useLocalizedStringFormatter-DxLulngP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D4fyMJ9h.js";import"./useFocusRing-Bim_lF4S.js";import"./index-YuVOA9gI.js";import"./index-C8YVmd9h.js";import"./useFormValidation-Cnq1Qu61.js";import"./useField-C3BtkGOu.js";import"./Button-wKa-_VCA.js";import"./Hidden-kaOVIzje.js";import"./useLabels-zSAz4c3a.js";import"./useButton-DoN6A2i0.js";import"./search-DmN-WmBb.js";import"./createLucideIcon-Czsnz6Io.js";import"./ClearButton-CgCSjq1K.js";import"./x-Bp5i4qjM.js";import"./Button-YkrHmIdv.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bo6l1f_2.js";import"./VisuallyHidden-BW8k_cqp.js";import"./FieldError-Bjas0Mhs.js";import"./Text-7oa-kXNm.js";import"./Text-DKTyWkTk.js";import"./RSPContexts-Chkf77Qe.js";import"./Collection-9hvmOY0B.js";import"./index-DDTtUNBm.js";import"./DragAndDrop-DeAG5snz.js";import"./getScrollParent-gVSPKYUW.js";import"./scrollIntoView-DcoQ6KWY.js";import"./SelectionIndicator-DnCLE3ip.js";import"./SelectionManager-FTUJlAns.js";import"./useEvent-DKEMayTQ.js";import"./useDescription-D545sxms.js";import"./inertValue-CDlmBBGJ.js";import"./useHighlightSelectionDescription-zmqY_520.js";import"./useUpdateEffect-B4hIPn8z.js";import"./ListKeyboardDelegate-CTFzEWto.js";import"./useHasTabbableChild-Cc1tkqlg.js";import"./Checkbox-j4GLHtm9.js";import"./Form-DsFznF04.js";import"./check-TF_0rXXk.js";import"./useToggleState-mKqN8lWu.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
