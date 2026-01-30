import{r as m,f as l,j as t}from"./iframe-D7hgefFi.js";import{S as d}from"./SearchField-fM-KIBfm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C4noBa7r.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C_xkaUiB.js";import"./utils-1x5w2eFs.js";import"./useLocalizedStringFormatter-Df3u4y0n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BK6YMpNa.js";import"./useFocusRing-BEIKl4Np.js";import"./index-DPE8HPpB.js";import"./index-Dc5FCrrK.js";import"./useFormValidation-DyceQfcW.js";import"./useField-C4uTTXDp.js";import"./Button-BkQQAf76.js";import"./Hidden-BPthAdp1.js";import"./useLabels-BNWiTCFC.js";import"./useButton-fmMn4P32.js";import"./search-D2AiJEp_.js";import"./createLucideIcon-B4zeiAHI.js";import"./ClearButton-DiZq2zAD.js";import"./Button-rPxCLKTe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_1GwcS9.js";import"./VisuallyHidden-JgK0gAZ6.js";import"./x-DLgV2fM1.js";import"./FieldError-CIHFT2OA.js";import"./Text-bVuSsYW4.js";import"./Text-DGN2slpv.js";import"./RSPContexts-edSBr0y1.js";import"./Collection-DT-GXrOm.js";import"./index-lLpdZDLW.js";import"./DragAndDrop-C9Cv1lQC.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSpOUr3d.js";import"./SelectionManager-DizDU1Yl.js";import"./useEvent-Bq0KSq8o.js";import"./useDescription-BnUO2d3M.js";import"./inertValue-BtiCOGk6.js";import"./useHighlightSelectionDescription-BVTFDxeq.js";import"./useUpdateEffect-DvKepdL0.js";import"./ListKeyboardDelegate-B4SqK4yR.js";import"./useHasTabbableChild-C8IMVCnA.js";import"./Checkbox-CvxqOXZZ.js";import"./Form-dGELDKxX.js";import"./check-BbXSzyfX.js";import"./useToggleState-EXB5HIQo.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
