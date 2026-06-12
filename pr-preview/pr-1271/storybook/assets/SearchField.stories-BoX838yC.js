import{r as m,f as l,j as t}from"./iframe-CZr0KooT.js";import{S as d}from"./SearchField-BDBC8mr0.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-pE78NXpp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C5atDzqm.js";import"./clsx-B-dksMZM.js";import"./Form-C0THYwkm.js";import"./useFocusRing-B8L-HrJZ.js";import"./index-By5QsIbW.js";import"./index-BLMOfdQA.js";import"./Input-GHmM1NN2.js";import"./Hidden-DSnmYJrK.js";import"./Button-BW2eFo1r.js";import"./useLabel-BC4w3s3i.js";import"./useLabels-DBo1sJWI.js";import"./useButton-DL-yMXOz.js";import"./FieldError-CZucTPlY.js";import"./Text-DasSw5Lo.js";import"./clsx-Ciqy0D92.js";import"./Text-BIiEvqpP.js";import"./RSPContexts-BdxpiS-s.js";import"./Group-CWWaXOIl.js";import"./useControlledState-BYpa5spl.js";import"./useLocalizedStringFormatter-BJKNLBfJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BpMBGabS.js";import"./useField-GqIJPyEy.js";import"./TextField.module-DdivwlC8.js";import"./search-DEOuxsG4.js";import"./createLucideIcon-DctSE2KV.js";import"./x-DO3x21yI.js";import"./useLocalizedStringFormatter-BF6CSovG.js";import"./Button-Cg4eDy57.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-f7pY2arW.js";import"./Collection-DTHlVKOq.js";import"./index-BSRvY494.js";import"./DragAndDrop-C8y-T_MT.js";import"./getScrollParent-zZf70wh8.js";import"./scrollIntoView-CIALb2MR.js";import"./SelectionIndicator-konGZj98.js";import"./SelectionManager-BFXs2QF5.js";import"./useEvent-D8s-tVaX.js";import"./useDescription-Q_xHtQSY.js";import"./inertValue-B_LY0tBj.js";import"./useHighlightSelectionDescription-D2nr7dda.js";import"./useUpdateEffect-CUALXv-B.js";import"./ListKeyboardDelegate-YvmZM1FZ.js";import"./useHasTabbableChild-Cz_EPDJo.js";import"./Checkbox-DNNqOJhF.js";import"./check-CzWN7n0A.js";import"./useToggleState-D_bXRiEt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
