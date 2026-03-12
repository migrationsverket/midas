import{r as m,f as l,j as t}from"./iframe-BXrSm-hy.js";import{S as d}from"./SearchField-FWEHGIRg.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BRYW5HOr.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D-2kZI1H.js";import"./utils-m8hafyc1.js";import"./useLocalizedStringFormatter-DxuMEbeM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bhf-IEWT.js";import"./useFocusRing-Dolnnvn8.js";import"./index-DH1xR7sx.js";import"./index-BEWugSXc.js";import"./useFormValidation-CUGfxI3J.js";import"./useField-Bft9auoy.js";import"./Button-QWm8aeY3.js";import"./Hidden-Bt1SQac9.js";import"./useLabels-BpFbPl_Z.js";import"./useButton-lx5Wqlq6.js";import"./search-BInGfkGo.js";import"./createLucideIcon-DYDRqzsr.js";import"./ClearButton-BkD1JWgu.js";import"./x-qLqiK7s0.js";import"./Button-DLjOZTyV.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dv29l914.js";import"./VisuallyHidden-CdQ2OkWx.js";import"./FieldError-CDqWfdJf.js";import"./Text-D-y5Nkc_.js";import"./Text-BpOUZ-T-.js";import"./RSPContexts-BrZ6stA1.js";import"./Collection-V7haSTvz.js";import"./index-BfXHwUr8.js";import"./DragAndDrop-vqKfUL5S.js";import"./getScrollParent-DJrEkJWW.js";import"./scrollIntoView-Be-7cfO7.js";import"./SelectionIndicator-C5uXLrVT.js";import"./SelectionManager-Ccbj1cbx.js";import"./useEvent-B4KqqYDZ.js";import"./useDescription-BgOqUMKe.js";import"./inertValue-gw_4QprD.js";import"./useHighlightSelectionDescription-cYR-sHTH.js";import"./useUpdateEffect-D2SJ5PwR.js";import"./ListKeyboardDelegate-BnfSiAt7.js";import"./useHasTabbableChild-DnmcrOVR.js";import"./Checkbox-cKHW3hkx.js";import"./Form-CawK5RnY.js";import"./check-B0rzxJtq.js";import"./useToggleState-Ik2fKqBk.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
