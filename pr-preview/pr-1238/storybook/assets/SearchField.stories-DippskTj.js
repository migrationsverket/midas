import{r as m,f as l,j as t}from"./iframe-DNIclJcr.js";import{S as d}from"./SearchField-Bo6SfVL1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DD5qAb7y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D_0gjjvk.js";import"./clsx-B-dksMZM.js";import"./Form-UMzwdMM5.js";import"./useFocusRing-DzLjolkJ.js";import"./index-CUHvxg5U.js";import"./index-DNZxg9il.js";import"./Input-P2QjTkbp.js";import"./Hidden-BEQ2WZ2g.js";import"./Button-BbtXrV7T.js";import"./useLabel-D60xKodB.js";import"./useLabels-BYBeQKfq.js";import"./useButton-rBFOLHck.js";import"./FieldError-C44SiAvc.js";import"./Text-Ctfv3ntz.js";import"./clsx-Ciqy0D92.js";import"./Text-CeEH6Nc6.js";import"./RSPContexts-j22KMFJy.js";import"./Group-C-2tBhNu.js";import"./useControlledState-DkjzWyRs.js";import"./useLocalizedStringFormatter-DVD6HWHu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-qCpS1bcj.js";import"./useField-DIAAtUKn.js";import"./TextField.module-DdivwlC8.js";import"./search-4n55DfEf.js";import"./createLucideIcon-DHdJRlte.js";import"./x-D-ccyFox.js";import"./useLocalizedStringFormatter-D1mfHEq_.js";import"./Button-CmNHemBb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BM29Dd_X.js";import"./Collection-BiyZZjBP.js";import"./index-B4nGpSPg.js";import"./DragAndDrop-Cpzs3DsN.js";import"./getScrollParent-DqCvg1x9.js";import"./scrollIntoView-B-YTSEJ0.js";import"./SelectionIndicator-Bg06VdVn.js";import"./SelectionManager-DYMvGJ3J.js";import"./useEvent-CeBY1Vjl.js";import"./useDescription-D_58VzB0.js";import"./inertValue-BjxcXDac.js";import"./useHighlightSelectionDescription-ETQlPmZF.js";import"./useUpdateEffect-DW-rXVxh.js";import"./ListKeyboardDelegate-CYlLVH1W.js";import"./useHasTabbableChild-BkCtAEJd.js";import"./Checkbox-Cvc1EsKL.js";import"./check-BNyBFbpx.js";import"./useToggleState-CETorwZN.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
