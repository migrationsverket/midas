import{r as m,f as l,j as t}from"./iframe-BBl_wx91.js";import{S as d}from"./SearchField-BFc8X1LS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CKNlS3eq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D68juJtw.js";import"./clsx-B-dksMZM.js";import"./Form-CNs6Bg3-.js";import"./useFocusRing-BjKrvikX.js";import"./index-CTqkaM45.js";import"./index-CMA0QeJ6.js";import"./Input-d2bxovJY.js";import"./Hidden-D6G0FIbn.js";import"./Button-FXCxhgQI.js";import"./useLabel-BOj_yASA.js";import"./useLabels-D9SZevKG.js";import"./useButton-EvSX0Y-8.js";import"./FieldError-BhvtU_6s.js";import"./Text-D6DSOlat.js";import"./clsx-Ciqy0D92.js";import"./Text-B468MR_I.js";import"./RSPContexts-bPv5UHdE.js";import"./Group-ScVWXCB7.js";import"./useControlledState-D0NTyUH5.js";import"./useLocalizedStringFormatter-RNUbG8Ti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CK6tdNCw.js";import"./useField-BFtz0bj4.js";import"./TextField.module-DdivwlC8.js";import"./search-DRoDYZVz.js";import"./createLucideIcon-ie2vk2qe.js";import"./x-BiTKY_Ox.js";import"./useLocalizedStringFormatter-2_5hwCHH.js";import"./Button-PgTnRDDW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DEPyp4m6.js";import"./Collection-CU5inBmJ.js";import"./index-BD391r5V.js";import"./DragAndDrop-CmVzBxhA.js";import"./getScrollParent-y3ebv2is.js";import"./scrollIntoView-dyHX5qbm.js";import"./SelectionIndicator-CUdOswRI.js";import"./SelectionManager-BGPOJJil.js";import"./useEvent-BIKoKN_5.js";import"./useDescription-0arSrRQM.js";import"./inertValue-BOX9ATjN.js";import"./useHighlightSelectionDescription-DU1E2REE.js";import"./useUpdateEffect-babjvtMy.js";import"./ListKeyboardDelegate-Btbe9yI3.js";import"./useHasTabbableChild-qkM2W6vi.js";import"./Checkbox-jdXdNo5i.js";import"./check-CS_JGrF7.js";import"./useToggleState-BE-xLllf.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
