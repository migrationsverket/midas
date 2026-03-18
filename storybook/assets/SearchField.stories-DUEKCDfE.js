import{r as m,f as l,j as t}from"./iframe-GrObhQyq.js";import{S as d}from"./SearchField-C5sLAhxK.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bxz08YpR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dha0NZNW.js";import"./utils-BcHOgQs3.js";import"./useLocalizedStringFormatter-Bn9Pd0zB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJ6xwTiM.js";import"./useFocusRing-BFS8TNaT.js";import"./index-DEBi2S7D.js";import"./index-BYwjw4Yq.js";import"./useFormValidation-BNKR3t-o.js";import"./useField-Bjtci_Fy.js";import"./Button-DeYdHRuW.js";import"./Hidden-dbsNdN1V.js";import"./useLabels-D8BolPkJ.js";import"./useButton-DFs2mCFz.js";import"./search-BSsEQDGU.js";import"./createLucideIcon-CmYd0_U9.js";import"./ClearButton-CIWc-3MT.js";import"./x-DctIqP8u.js";import"./Button-Cc5OvUjG.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Cn3i1neC.js";import"./VisuallyHidden-CLjBotbO.js";import"./FieldError-BbmV2Vd2.js";import"./Text-DFdfdwaW.js";import"./Text-1Ne8nj-Z.js";import"./RSPContexts-DVG4WgYz.js";import"./Collection-DtaPM21-.js";import"./index-BaVYZYKy.js";import"./DragAndDrop-Be3OIXVR.js";import"./getScrollParent-aN5df5mj.js";import"./scrollIntoView-CtxTz0vA.js";import"./SelectionIndicator-vByACUzS.js";import"./SelectionManager-y2J_myWn.js";import"./useEvent-Cv_3xPK7.js";import"./useDescription--BWWeftJ.js";import"./inertValue-D9HTDHtQ.js";import"./useHighlightSelectionDescription-DkKvOdQQ.js";import"./useUpdateEffect-BOJataCj.js";import"./ListKeyboardDelegate-DLkccLYE.js";import"./useHasTabbableChild-DfdF8yV1.js";import"./Checkbox-EEkqL1DT.js";import"./Form-CQVTLubV.js";import"./check-Db3YmwSp.js";import"./useToggleState-BndUGm7c.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
