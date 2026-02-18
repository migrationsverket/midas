import{r as m,f as l,j as t}from"./iframe-D9H9xcS2.js";import{S as d}from"./SearchField-BVfPoY2D.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CWWSuTet.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Db-wpj-x.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CAi_EPd5.js";import"./utils-fDye7Hn-.js";import"./useLocalizedStringFormatter-CC37Fr-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCyNkiM7.js";import"./useFocusRing-Ceh5Z1MC.js";import"./index-BnIUjihK.js";import"./index-BmeqR-Yx.js";import"./useFormValidation-B3qtubIU.js";import"./useField-CqvzVwOJ.js";import"./Button-Dy6Jv4XA.js";import"./Hidden-DbKUAskx.js";import"./useLabels-B07HLygv.js";import"./useButton-DlcBDUmj.js";import"./search-DuVoGDxl.js";import"./createLucideIcon-mT-ajzIy.js";import"./ClearButton-DsGUv7LJ.js";import"./Button-DGBu_aXN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DJEgiUI-.js";import"./VisuallyHidden-C7ARzOYG.js";import"./x-DeuWguVB.js";import"./FieldError-CVRuJPZY.js";import"./Text-CVrEtWWi.js";import"./Text-Dg1l2GcJ.js";import"./RSPContexts-BdMR1EyJ.js";import"./Collection-QXVY0Vqa.js";import"./index-CNTvhnoW.js";import"./DragAndDrop-CS2ca_Rl.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B32U9fK1.js";import"./SelectionManager-Bufj-R-c.js";import"./useEvent-DlZFMt0I.js";import"./useDescription-Bb7bc4Rr.js";import"./inertValue-CCPPiuAY.js";import"./useHighlightSelectionDescription-0O4J-q_v.js";import"./useUpdateEffect-C9XobJMi.js";import"./ListKeyboardDelegate-CW31MGEJ.js";import"./useHasTabbableChild-BBiAhCLL.js";import"./Checkbox-CK12u8D0.js";import"./Form-DvYiAud_.js";import"./check-B2AsAI9O.js";import"./useToggleState-CbNNRceA.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
