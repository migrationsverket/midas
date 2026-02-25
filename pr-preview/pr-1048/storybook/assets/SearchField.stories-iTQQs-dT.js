import{r as m,f as l,j as t}from"./iframe-Bces5ReF.js";import{S as d}from"./SearchField-CvKRbeLU.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CuvRYAyN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DzHlTDkP.js";import"./useObjectRef-Cb_4IuYU.js";import"./useLocalizedStringFormatter-DvTA5UTi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dz3HtiuY.js";import"./useFocusRing-BbIVxAS-.js";import"./useFocusable-CCLwmwwj.js";import"./index-C3ONQ0hZ.js";import"./index-mmvsT4Yz.js";import"./useFormValidation-DKvuYSK2.js";import"./useField-BnZ2w5LO.js";import"./Button-sx3D740K.js";import"./utils-KBwZHkAa.js";import"./Hidden-HEj2_VP4.js";import"./number-DfkVkf0F.js";import"./useLabels-it0H97ln.js";import"./useButton-CFUJeSeD.js";import"./search-BNs_NuED.js";import"./createLucideIcon-B7hgpfhf.js";import"./ClearButton-Drm5RBSn.js";import"./Button-CYRhppib.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bezv0VbS.js";import"./VisuallyHidden-CplwDL_w.js";import"./x-DUS_Kj0p.js";import"./FieldError-CoA192lt.js";import"./Text-BbgSNpRI.js";import"./Text-S43pSr6l.js";import"./RSPContexts-KQSALUVI.js";import"./Collection-DTPpeXjN.js";import"./CollectionBuilder-DYUOvLcK.js";import"./index-eELsyXIA.js";import"./DragAndDrop-DHFQ2yjd.js";import"./getScrollParent-CNLff4rP.js";import"./scrollIntoView-rsEwujUN.js";import"./SelectionIndicator-R-3rkI9A.js";import"./SelectionManager-DnJZ1f0u.js";import"./useEvent-r8dTAAd3.js";import"./useDescription-BDbgTMgy.js";import"./inertValue-Day6WnGg.js";import"./useHighlightSelectionDescription-DtmSatiH.js";import"./useUpdateEffect-D5BwVI9g.js";import"./ListKeyboardDelegate-CZk_8FT1.js";import"./useHasTabbableChild-i1OetJkl.js";import"./Checkbox-D0-XrLav.js";import"./Form-DgaYtgkc.js";import"./check-DLQE9r_7.js";import"./useToggleState-Dea2DGGC.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
