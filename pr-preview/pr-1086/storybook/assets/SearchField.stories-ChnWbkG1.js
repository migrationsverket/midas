import{r as m,f as l,j as t}from"./iframe-DBfoD2U7.js";import{S as d}from"./SearchField-BHsYUayS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DojISD2L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-_hIvr0Rm.js";import"./utils-D_iENdjI.js";import"./useLocalizedStringFormatter-D7V2ZqXE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Czwx7loP.js";import"./useFocusRing-_y_4-82L.js";import"./index-Cn5t1hH6.js";import"./index-Cba1Uww2.js";import"./useFormValidation-D9--7C6U.js";import"./useField-BLOP0__N.js";import"./Button-Bp1ZxcfX.js";import"./Hidden-BUhyB_bX.js";import"./useLabels-BUVsGCLs.js";import"./useButton-Cw8muoeF.js";import"./search-Cz4nPVuR.js";import"./createLucideIcon-Bmf1TE0_.js";import"./ClearButton-CC43lVlo.js";import"./Button-mUhJkAyU.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTqG2xCS.js";import"./VisuallyHidden-DIm4I4zN.js";import"./x-BWVpbBLY.js";import"./FieldError-CyN1tUSk.js";import"./Text-BwIO0Pwg.js";import"./Text-D6_QswxK.js";import"./RSPContexts-BQx21hqj.js";import"./Collection-CusLbJSw.js";import"./index-BBhCFU6K.js";import"./DragAndDrop-C4HDcrBX.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DaRDFZPd.js";import"./SelectionManager-BhEz_fDy.js";import"./useEvent-tLrG8XwI.js";import"./useDescription-BtveEICz.js";import"./inertValue-DhmCu5KN.js";import"./useHighlightSelectionDescription-tlxtbLrH.js";import"./useUpdateEffect-CsqDLGyN.js";import"./ListKeyboardDelegate-BjRG0rSY.js";import"./useHasTabbableChild-BNYF-53D.js";import"./Checkbox-DWeWp3r-.js";import"./Form-HlTkFeqe.js";import"./check-CPQu51M6.js";import"./useToggleState-CeTbRRdE.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
